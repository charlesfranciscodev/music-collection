exports.seed = (knex) => {
  return knex("genres")
  .del()
  .then(() => {
    // Inserts seed entries
    return knex("genres").insert([
      { "name": "blues" },
      { "name": "classical" },
      { "name": "country" },
      { "name": "experimental" },
      { "name": "electronic" },

      { "name": "folk" },
      { "name": "hip-Hop" },
      { "name": "instrumental" },
      { "name": "international" },
      { "name": "jazz" },

      { "name": "pop" },
      { "name": "rock" }
    ]);
  });
};
