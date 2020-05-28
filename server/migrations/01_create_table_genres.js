exports.up = (knex) => {
  return knex.schema
  .dropTableIfExists("genres")
  .createTable("genres", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.unique("name");
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable("genres")
};
