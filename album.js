class Album {
  constructor(id,album_name,artists){
    this.id = id;
    this.album_name = album_name;
    this.artists = artists;
    this.tracks = [];
  }

  addTrack(track){
    this.tracks.push(track);
  }
  durationMin(){
    let min = 0;
    this.tracks.forEach((track)=>{
      min += Number(track.duration_ms) / 60000;
    });
    return min.toFixed(2);
  }
  summary(){
    console.log(`Name: ${this.album_name}`);
    console.log(`Artist(s): ${this.artists}`);
    console.log(`Duration (min.): ${this.durationMin()}`);
    console.log('Tracks:');
    this.tracks.forEach((track) => {
      console.log(`- ${track.title}`);
    });
    console.log();
  }
}

module.exports = Album;
