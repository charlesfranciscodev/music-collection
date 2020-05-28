exports.seed = (knex) => {
  return knex("tracks")
  .del()
  .then(() => {
    // Inserts seed entries
    return knex("tracks").insert([
      {
        "name": "Algorithms",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_01_-_Algorithms.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Elipsis",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_02_-_Elipsis.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Illustrated Novel",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_03_-_Illustrated_Novel.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Moonrise",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_04_-_Moonrise.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Negentropy",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_05_-_Negentropy.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Organisms",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_06_-_Organisms.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Shipping Lanes",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_07_-_Shipping_Lanes.mp3",
        "genreId": 5,
        "artistId": 1
      },

      {
        "name": "Bon Journée",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_01_-_Bon_Journe.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "The Ramble",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_02_-_The_Ramble.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Drifting",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_03_-_Drifting.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Barefoot",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_04_-_Barefoot.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Fuzzy Caterpillar",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_05_-_Fuzzy_Caterpillar.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Pacing",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_06_-_Pacing.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Starlight",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_07_-_Starlight.mp3",
        "genreId": 5,
        "artistId": 1
      },

      {
        "name": "Dusk",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_01_-_Dusk.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Dim",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_02_-_Dim.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "City Lights",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_03_-_City_Lights.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Small Hours",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_04_-_Small_Hours.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "The Gloaming",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_05_-_The_Gloaming.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Nocturnal",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_06_-_Nocturnal.mp3",
        "genreId": 5,
        "artistId": 1
      },
      {
        "name": "Daybreak",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_07_-_Daybreak.mp3",
        "genreId": 5,
        "artistId": 1
      },

      {
        "name": "Orange Eventide",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_01_-_Orange_Eventide.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Meditation Room II",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_02_-_Meditation_Room_II.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Siren's Call",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_03_-_Sirens_Call.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Moonbow",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_04_-_Moonbow.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Tranquil Bay",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_05_-_Tranquil_Bay.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Drinking the Dream",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_06_-_Drinking_the_Dream.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Dark Depths",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_07_-_Dark_Depths.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Sounding Echo",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_08_-_Sounding_Echo.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Melting Pearls",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_09_-_Melting_Pearls.mp3",
        "genreId": 5,
        "artistId": 2
      },
      {
        "name": "Waterwalk",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_10_-_Waterwalk.mp3",
        "genreId": 5,
        "artistId": 2
      },

      {
        "name": "Reunion of the Spaceducks (Kielokaz ID 365)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_01_-_Reunion_of_the_Spaceducks_Kielokaz_ID_365.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Trip to Ganymed (Kielokaz ID 363)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_02_-_Trip_to_Ganymed_Kielokaz_ID_363.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Wow (Kielokaz ID 359)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_03_-_Wow_Kielokaz_ID_359.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Just Arround the World (Kielokaz ID 362)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_04_-_Just_Arround_the_World_Kielokaz_ID_362.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Opening Horizons (Kielokaz ID 361)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_05_-_Opening_Horizons_Kielokaz_ID_361.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Krotenwurz (Kielokaz ID 360)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_06_-_Krotenwurz_Kielokaz_ID_360.mp3",
        "genreId": 10,
        "artistId": 4
      },
      {
        "name": "Alte Herren (Kielokaz ID 364)",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_07_-_Alte_Herren_Kielokaz_ID_364.mp3",
        "genreId": 10,
        "artistId": 4
      },

      {
        "name": "Storybook",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_01_-_Storybook.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Hotshot",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_02_-_Hotshot.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Stomps and Claps",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_03_-_Stomps_and_Claps.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Upbeat Party",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_04_-_Upbeat_Party.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Little Idea",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_05_-_Little_Idea.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Clear Progress",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_06_-_Clear_Progress.mp3",
        "genreId": 11,
        "artistId": 5
      },
      {
        "name": "Inspirational Outlook",
        "musicFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_07_-_Inspirational_Outlook.mp3",
        "genreId": 11,
        "artistId": 5
      }
    ]);
  });
};
