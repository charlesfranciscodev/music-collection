exports.seed = (knex) => {
  return knex("albums_tracks")
  .del()
  .then(() => {
    // Inserts seed entries
    return knex("albums_tracks").insert([
      {
        "albumId": 1,
        "trackId": 1,
        "order": 1
      },
      {
        "albumId": 1,
        "trackId": 2,
        "order": 2
      },
      {
        "albumId": 1,
        "trackId": 3,
        "order": 3
      },
      {
        "albumId": 1,
        "trackId": 4,
        "order": 4
      },
      {
        "albumId": 1,
        "trackId": 5,
        "order": 5
      },
      {
        "albumId": 1,
        "trackId": 6,
        "order": 6
      },
      {
        "albumId": 1,
        "trackId": 7,
        "order": 7
      },

      {
        "albumId": 2,
        "trackId": 8,
        "order": 1
      },
      {
        "albumId": 2,
        "trackId": 9,
        "order": 2
      },
      {
        "albumId": 2,
        "trackId": 10,
        "order": 3
      },
      {
        "albumId": 2,
        "trackId": 11,
        "order": 4
      },
      {
        "albumId": 2,
        "trackId": 12,
        "order": 5
      },
      {
        "albumId": 2,
        "trackId": 13,
        "order": 6
      },
      {
        "albumId": 2,
        "trackId": 14,
        "order": 7
      },

      {
        "albumId": 3,
        "trackId": 15,
        "order": 1
      },
      {
        "albumId": 3,
        "trackId": 16,
        "order": 2
      },
      {
        "albumId": 3,
        "trackId": 17,
        "order": 3
      },
      {
        "albumId": 3,
        "trackId": 18,
        "order": 4
      },
      {
        "albumId": 3,
        "trackId": 19,
        "order": 5
      },
      {
        "albumId": 3,
        "trackId": 20,
        "order": 6
      },
      {
        "albumId": 3,
        "trackId": 21,
        "order": 7
      },

      {
        "albumId": 4,
        "trackId": 22,
        "order": 1
      },
      {
        "albumId": 4,
        "trackId": 23,
        "order": 2
      },
      {
        "albumId": 4,
        "trackId": 24,
        "order": 3
      },
      {
        "albumId": 4,
        "trackId": 25,
        "order": 4
      },
      {
        "albumId": 4,
        "trackId": 26,
        "order": 5
      },
      {
        "albumId": 4,
        "trackId": 27,
        "order": 6
      },
      {
        "albumId": 4,
        "trackId": 28,
        "order": 7
      },
      {
        "albumId": 4,
        "trackId": 29,
        "order": 8
      },
      {
        "albumId": 4,
        "trackId": 30,
        "order": 9
      },
      {
        "albumId": 4,
        "trackId": 31,
        "order": 10
      },

      {
        "albumId": 5,
        "trackId": 32,
        "order": 1
      },
      {
        "albumId": 5,
        "trackId": 33,
        "order": 2
      },
      {
        "albumId": 5,
        "trackId": 34,
        "order": 3
      },
      {
        "albumId": 5,
        "trackId": 35,
        "order": 4
      },
      {
        "albumId": 5,
        "trackId": 36,
        "order": 5
      },
      {
        "albumId": 5,
        "trackId": 37,
        "order": 6
      },
      {
        "albumId": 5,
        "trackId": 38,
        "order": 7
      },

      {
        "albumId": 6,
        "trackId": 39,
        "order": 1
      },
      {
        "albumId": 6,
        "trackId": 40,
        "order": 2
      },
      {
        "albumId": 6,
        "trackId": 41,
        "order": 3
      },
      {
        "albumId": 6,
        "trackId": 42,
        "order": 4
      },
      {
        "albumId": 6,
        "trackId": 43,
        "order": 5
      },
      {
        "albumId": 6,
        "trackId": 44,
        "order": 6
      },
      {
        "albumId": 6,
        "trackId": 45,
        "order": 7
      }
    ]);
  });
};
