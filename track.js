class Track{
  constructor(id,album_id,title,trackNumber,duration_ms){
    this.id = id;
    this.album_id = album_id;
    this.title = title;
    this.trackNumber = trackNumber;
    this.duration_ms = duration_ms;
  }
}

module.exports = Track;
