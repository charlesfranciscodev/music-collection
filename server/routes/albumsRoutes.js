const knex = require("knex")({
  "client": "pg",
  "connection": process.env.DATABASE_URL
});

const validateReqBody = require("../middlewares/validateReqBody");

module.exports = (app) => {
  app.get("/api/albums", async (req, res) => {
    let albums = await knex.select().from("albums").then();
    res.json(albums);
  });

  app.get("/api/albums/:id(\\d+)", async (req, res) => {
    let album = await knex("albums").where({ "id": req.params.id }).first().then();
    if (!album) {
      res.status(404).json({ "message": `Album with id ${req.params.id} does not exist`});
    } else {
      let albumTracks = await knex("albums_tracks").where({"albumId": album.id}).then();
      let tracks = [];
      for (let i = 0; i < albumTracks.length; i++) {
        let track = await knex("tracks").where({ "id": albumTracks[i].trackId }).first().then();
        track.order = albumTracks[i].order;
        tracks.push(track);
      }
      album.tracks = tracks;
      res.json(album);
    }
  });

  app.post("/api/albums", validateReqBody(["name", "websiteUrl"]), async (req, res) => {
    try {
      let array = await knex("albums").returning("id").insert({
        "name": req.body.name,
        "websiteUrl": req.body.websiteUrl,
        "genreId": req.body.genreId ? req.body.genreId : null,
        "artistId": req.body.artistId ? req.body.artistId : null,
        "coverArtFileUrl": req.body.coverArtFileUrl ? req.body.coverArtFileUrl : null,
        "description": req.body.description ? req.body.description : null
      }).then();
      res.json({
        "id": array[0],
        "message": "Album created successfully"
      });
    } catch(error) {
      res.status(400).json({"message": error.detail});
    }
  });

  app.put("/api/albums", validateReqBody(["id", "name", "websiteUrl"]), async (req, res) => {
    let album = await knex("albums").where({"id": req.body.id }).first().then();
    if (album) {
      try {
        // update albums table
        await knex("albums").where({"id": req.body.id }).update({
          "name": req.body.name,
          "websiteUrl": req.body.websiteUrl,
          "genreId": req.body.genreId ? req.body.genreId : null,
          "artistId": req.body.artistId ? req.body.artistId : null,
          "coverArtFileUrl": req.body.coverArtFileUrl ? req.body.coverArtFileUrl : null,
          "description": req.body.description ? req.body.description : null
        }).then();

        // update albums_tracks table
        if (req.body.tracks) {
          let prevAlbumTracks = await knex("albums_tracks").where({"albumId": req.body.id}).then();
          for (let i = 0; i < req.body.tracks.length; i++) {
            // check if we should update the track order(s)
            let updated = false;
            for (let j = 0; j < prevAlbumTracks.length; j++) {
              if (prevAlbumTracks[j].trackId === req.body.tracks[i].id) {
                await knex("albums_tracks")
                .where({ "albumId": req.body.id, "trackId": req.body.tracks[i].id })
                .update({ "order": req.body.tracks[i].order });
                updated = true;
              }
            }
            if (!updated) {
              // create a new albums_tracks entry
              await knex("albums_tracks").insert({
                "albumId": req.body.id,
                "trackId": req.body.tracks[i].id,
                "order": req.body.tracks[i].order
              }).then();
            }
          }

          // check if we should delete track(s) from the album
          for (let i = 0; i < prevAlbumTracks.length; i++) {
            let trackExists = false;
            for (let j = 0; j < req.body.tracks.length; j++) {
              if (prevAlbumTracks[i].trackId === req.body.tracks[j].id) {
                trackExists = true;
                break;
              }
            }
            if (!trackExists) {
              await knex("albums_tracks")
              .where({ albumId: req.body.id, trackId: prevAlbumTracks[i].trackId }).del().then();
            }
          }
        } else {
          // delete all tracks for this album
          await knex("albums_tracks").where({ "albumId": req.body.id }).del().then();
        }
        res.json({ "message": "Album updated successfully" });
      } catch(error) {
        res.status(400).json({"message": error.toString()});
      }
    } else {
      res.status(404).json({ "message": `Album with id ${req.body.id} does not exist`});
    }
  });

  app.delete("/api/albums/:id(\\d+)", async (req, res) => {
    let album = await knex("albums").where({ "id": req.params.id }).first().then();
    if (!album) {
      res.status(404).json({ "message": `Album with id ${req.params.id} does not exist`});
    } else {
      await knex("albums").where({ "id": req.params.id }).del().then();
      res.sendStatus(204);
    }
  });
}
