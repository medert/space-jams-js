// Do not modify this code unless you are attempting the extra challenge
let Album = require('./album');
let Track = require('./track');
let TRACKS = require('./space-jams-tracks');

let albums = [];

TRACKS.forEach((track) => {
  // find an album by matching the album.id with track[:album_id]
  let trackObj = new Track(
                          track.track_id,
                          track.album_id,
                          track.title,
                          track.trackNumber,
                          track.duration_ms
                          );
                          
  let album = albums.find(album => { return album.id === trackObj.album_id; });

  // if the album hasn't been added to the albums array yet, add it
  if (!album) {
    album = new Album(track.album_id,track.album_name,track.artists);
    albums.push(album);
  }

  // add the track to the album's tracks property
  album.addTrack(trackObj);
});

// print out the summary for each album
albums.forEach((album) => {
  album.summary();
});
