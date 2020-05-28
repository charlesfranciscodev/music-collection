exports.seed = (knex) => {
  return knex("artists")
  .del()
  .then(() => {
    // Inserts seed entries
    return knex("artists").insert([
      {
        "name": "Chad Crouch",
        "websiteUrl": "https://www.soundofpicture.com/",
        "location": "Portland, Oregon"
      },
      {
        "name": "Brevyn",
        "websiteUrl": "http://vulpianorecords.com/"
      },
      {
        "name": "Ketsa",
        "websiteUrl": "https://ketsa.uk//",
        "location": "London"
      },
      {
        "name": "KieLoKaz",
        "websiteUrl": "https://www.musikbrause.de/",
        "location": "Göppingen - Germany"
      },
      {
        "name": "Scott Holmes",
        "websiteUrl": "https://scottholmesmusic.com/",
        "location": "Arbroath, Scotland"
      }
    ]);
  });
};
