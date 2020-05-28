const knex = require("knex")({
  "client": "pg",
  "connection": process.env.DATABASE_URL
});

const validateReqBody = require("../middlewares/validateReqBody");

module.exports = (app) => {
  app.get("/api/artists", async (req, res) => {
    let artists = await knex.select().from("artists").then();
    res.json(artists);
  });

  app.get("/api/artists/:id(\\d+)", async (req, res) => {
    let artist = await knex("artists").where({ "id": req.params.id }).first().then();
    if (!artist) {
      res.status(404).json({ "message": `Artist with id ${req.params.id} does not exist`});
    } else {
      res.json(artist);
    }
  });

  app.post("/api/artists", validateReqBody(["name"]), async (req, res) => {
    let array = await knex("artists").returning("id").insert({
      "name": req.body.name,
      "websiteUrl": req.body.websiteUrl ? req.body.websiteUrl : null,
      "location": req.body.location ? req.body.location : null
    }).then();
    res.json({
      "id": array[0],
      "message": "Artist created successfully"
    });
  });

  app.put("/api/artists", validateReqBody(["id", "name"]), async (req, res) => {
    let artist = await knex("artists").where({"id": req.body.id }).first().then();
    if (artist) {
      await knex("artists").where({"id": req.body.id }).update({
        "name": req.body.name,
        "websiteUrl": req.body.websiteUrl ? req.body.websiteUrl : null,
        "location": req.body.location ? req.body.location : null
      }).then();
      res.json({ "message": "Artist updated successfully" });
    } else {
      res.status(404).json({ "message": `Artist with id ${req.body.id} does not exist`});
    }
  });

  app.delete("/api/artists/:id(\\d+)", async (req, res) => {
    let artist = await knex("artists").where({ "id": req.params.id }).first().then();
    if (!artist) {
      res.status(404).json({ "message": `Artist with id ${req.params.id} does not exist`});
    } else {
      await knex("artists").where({ "id": req.params.id }).del().then();
      res.sendStatus(204);
    }
  });
}
