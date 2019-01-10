class Album {
  constructor(id,title,artists){
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.tracks = [];
    // this.durationMin = 0;
  }

  durationMin(){
    let min = 0;
    this.tracks.forEach((track)=>{
      min += Number(track.duration_ms) / 60000;
    });
    return min.toFixed(2);
  }
  summary(){
    console.log(`Name: ${this.title}`);
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
