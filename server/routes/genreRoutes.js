const knex = require("knex")({
  "client": "pg",
  "connection": process.env.DATABASE_URL
});

const validateReqBody = require("../middlewares/validateReqBody");

module.exports = (app) => {
  app.get("/api/genres", async (req, res) => {
    let genres = await knex.select().from("genres").then();
    res.json(genres);
  });

  app.post("/api/genres", validateReqBody(["name"]), async (req, res) => {
    let name = req.body.name;
    let genre = await knex("genres").where({ name }).first().then();
    if (!genre) {
      await knex("genres").insert({ name }).then();
      res.json({ "message": "Genre created successfully" });
    } else {
      res.status(409).json({ "message": `Genre '${name}' already exists`});
    }
  });

  app.put("/api/genres", validateReqBody(["id", "name"]), async (req, res) => {
    let genre = await knex("genres").where({"id": req.body.id }).first().then();
    if (genre) {
      await knex("genres").where({"id": req.body.id }).update({"name": req.body.name}).then();
      res.json({ "message": "Genre updated successfully" });
    } else {
      res.status(404).json({ "message": `Genre with id ${req.body.id} does not exist`});
    }
  });

  app.delete("/api/genres/:id(\\d+)", async (req, res) => {
    let genre = await knex("genres").where({ "id": req.params.id }).first().then();
    if (!genre) {
      res.status(404).json({ "message": `Genre with id ${req.params.id} does not exist`});
    } else {
      await knex("genres").where({ "id": req.params.id }).del().then();
      res.sendStatus(204);
    }
  });
}
