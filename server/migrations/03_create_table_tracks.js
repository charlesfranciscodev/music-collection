exports.up = (knex) => {
  return knex.schema
  .dropTableIfExists("tracks")
  .createTable("tracks", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.text("musicFileUrl").notNullable();
    table.integer("genreId").unsigned();
    table.foreign("genreId").references("genres.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.integer("artistId").unsigned();
    table.foreign("artistId").references("artists.id").onUpdate("CASCADE").onDelete("CASCADE");
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable("tracks")
};
