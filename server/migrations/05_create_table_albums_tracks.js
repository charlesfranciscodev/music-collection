exports.up = (knex) => {
  return knex.schema
  .dropTableIfExists("albums_tracks")
  .createTable("albums_tracks", (table) => {
    table.integer("albumId").unsigned();
    table.foreign("albumId").references("albums.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.integer("trackId").unsigned();
    table.foreign("trackId").references("tracks.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.integer("order").unsigned().notNullable();
    table.primary(["albumId", "trackId"]);
    table.unique(["albumId", "order"]);
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable("albums_tracks")
};
