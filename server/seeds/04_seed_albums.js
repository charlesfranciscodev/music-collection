exports.seed = (knex) => {
  return knex("albums")
  .del()
  .then(() => {
    // Inserts seed entries
    return knex("albums").insert([
      {
        "name": "Arps",
        "websiteUrl": "https://www.soundofpicture.com/",
        "genreId": 5,
        "artistId": 1,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/electronic/arps/Chad_Crouch_-_Arps_-_20190913144052757.jpg",
        "description": "With 'Arps' Portland, Or. composer/producer Chad Crouch has created a collection of warm analog synth tracks with arpeggiated melodies that recall the late 70’s early 80’s golden era of electronic music.  Meditative, undulating, sweeping synth parts weave together in a reflective, melodic reverie.  Touchstones include Air, OMD, The theme song to Stranger Things, and Kraftwerk."
      },
      {
        "name": "Drifter",
        "websiteUrl": "https://www.soundofpicture.com/",
        "genreId": 5,
        "artistId": 1,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/electronic/drifter/Chad_Crouch_-_Drifter_-_20190805125622490.jpg",
        "description": "Portland, Or. composer/producer Chad Crouch has been on a bohemian power-ballad streak and 'Drifter' collects the cream of the crop.  The instrumental compositions are mellow, melodic, meandering and multifaceted.  Arrangements feature electric piano, electric bass, drums, synth, vibes, strings and detailed percussion, while melodies veer toward the sunny side of the street. It's a uniquely organic chill-out suite with heart."
      },
      {
        "name": "Night Tracks",
        "websiteUrl": "https://www.soundofpicture.com/",
        "genreId": 5,
        "artistId": 1,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/electronic/night-tracks/Chad_Crouch_-_Night_Tracks_-_20190622142220691.jpg",
      },
      {
        "name": "Liquid Sunlight",
        "websiteUrl": "http://vulpianorecords.com/",
        "genreId": 5,
        "artistId": 2,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/electronic/liquid-sunlight/Brevyn_-_Liquid_Sunlight_-_2018082593931258.png",
        "description": "Following Brevyn's single release on Vulpiano Records for Netlabel Day 2018, 'Sea Cave / Indigo' (vulpianorecords.bandcamp.com/album/sea-cave-indigo) comes a re-release of their delightfully summery 'Liquid Sunlight' album, complete with bonus tracks ('Drinking the Dream', 'Dark Depths') and an updated track order. More about 'Liquid Sunlight' From Brevyn: Liquid Sunlight was inspired by synth/sequencer-based new age of the 80s and early 90s like Vangelis, Spencer Nilsen [mostly his work on the Sega CD Ecco The Dolphin music] & Suzanne Ciani. Since this sort of music is often dismissed as pure cheese I wanted to contrast that presumption by emphasizing it’s more mysterious edges. This is not to say I think it can’t be good or effective without that sort of twist. But I also just wanted to explore that particular nostalgic yet haunting feeling certain pieces by say, Emerald Web or Vangelis captured really beautifully. You know, the twinkle of synth bells / flute in an old fantasy animation’s credits roll, which became strangely eerie as time went by and/or as the VHS got wonky. Even the way some 90s weather channel music sounds could apply. I felt sunsets were another thing I came to associate with this feeling, hence the one in the cover. I wanted to evoke a lost paradise, one surrounded by colorful nature with something sinister at work. The genuine beauty I heard in these songs and the motivation to create something similar myself - and without irony - are big parts of what led me to make this album."
      },
      {
        "name": "Free Ganymed",
        "websiteUrl": "https://www.musikbrause.de/",
        "genreId": 10,
        "artistId": 4,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/jazz/free-ganymed/KieLoKaz_-_Free_Ganymed_-_20190912113845208.jpg",
        "description": "New Album out from the Staubkeller. We are a Jazz Livenjam Band, playling sometimes after work together."
      },
      {
        "name": "Inspiring & Upbeat Music",
        "websiteUrl": "https://scottholmesmusic.com/",
        "genreId": 11,
        "artistId": 5,
        "coverArtFileUrl": "https://charlesfranciscodev.github.io/music/pop/inspiring-upbeat-music/Scott_Holmes_-_Inspiring__Upbeat_Music_-_2019090383732068.jpg",
        "description": "New Album out from the Staubkeller. We are a Jazz Livenjam Band, playling sometimes after work together."
      }
    ]);
  });
};
