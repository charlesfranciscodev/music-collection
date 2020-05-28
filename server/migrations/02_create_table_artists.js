exports.up = (knex) => {
  return knex.schema
  .dropTableIfExists("artists")
  .createTable("artists", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.text("websiteUrl");
    table.text("location");
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable("artists")
};
