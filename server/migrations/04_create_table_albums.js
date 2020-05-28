exports.up = (knex) => {
  return knex.schema
  .dropTableIfExists("albums")
  .createTable("albums", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.text("websiteUrl").notNullable();
    table.integer("genreId").unsigned();
    table.foreign("genreId").references("genres.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.integer("artistId").unsigned();
    table.foreign("artistId").references("artists.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.text("coverArtFileUrl");
    table.text("description");
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable("albums")
};
