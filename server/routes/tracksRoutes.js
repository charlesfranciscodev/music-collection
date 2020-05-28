const knex = require("knex")({
  "client": "pg",
  "connection": process.env.DATABASE_URL
});

const validateReqBody = require("../middlewares/validateReqBody");

module.exports = (app) => {
  app.get("/api/tracks", async (req, res) => {
    let tracks = await knex.select().from("tracks").then();
    res.json(tracks);
  });

  app.get("/api/tracks/:id(\\d+)", async (req, res) => {
    let track = await knex("tracks").where({ "id": req.params.id }).first().then();
    if (!track) {
      res.status(404).json({ "message": `Track with id ${req.params.id} does not exist`});
    } else {
      res.json(track);
    }
  });

  app.get("/api/tracks/:genre", async (req, res) => {
    let tracks = await knex("tracks")
    .join("genres", "genres.id", "=", "tracks.genreId")
    .join("artists", "artists.id", "=", "tracks.artistId")
    .select("tracks.id", "tracks.name", "tracks.musicFileUrl", "artists.name as artist")
    .where({"genres.name": req.params.genre})
    .then();
    res.json(tracks);
  });

  app.post("/api/tracks", validateReqBody(["name", "musicFileUrl"]), async (req, res) => {
    try {
     let array = await knex("tracks").returning("id").insert({
        "name": req.body.name,
        "musicFileUrl": req.body.musicFileUrl,
        "genreId": req.body.genreId ? req.body.genreId : null,
        "artistId": req.body.artistId ? req.body.artistId : null
      }).then();
      res.json({
        "id": array[0],
        "message": "Track created successfully"
      });
    } catch(error) {
      res.status(400).json({"message": error.detail});
    }
  });

  app.put("/api/tracks", validateReqBody(["id", "name", "musicFileUrl"]), async (req, res) => {
    let track = await knex("tracks").where({"id": req.body.id }).first().then();
    if (track) {
      try {
        await knex("tracks").where({"id": req.body.id }).update({
          "name": req.body.name,
          "musicFileUrl": req.body.musicFileUrl,
          "genreId": req.body.genreId ? req.body.genreId : null,
          "artistId": req.body.artistId ? req.body.artistId : null
        }).then();
        res.json({ "message": "Track updated successfully" });
      } catch(error) {
        res.status(400).json({"message": error.detail});
      }
    } else {
      res.status(404).json({ "message": `Track with id ${req.body.id} does not exist`});
    }
  });

  app.delete("/api/tracks/:id(\\d+)", async (req, res) => {
    let track = await knex("tracks").where({ "id": req.params.id }).first().then();
    if (!track) {
      res.status(404).json({ "message": `Track with id ${req.params.id} does not exist`});
    } else {
      await knex("tracks").where({ "id": req.params.id }).del().then();
      res.sendStatus(204);
    }
  });
}
