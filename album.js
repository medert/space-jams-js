class Album {
  constructor(id,title,artists){
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.tracks = [];
    this.durationMin = 0;
  }

  durationMin(){
    this.tracks.forEach((track)=>{
      this.durationMin += track.duration_ms;
    });
  }
  summary(){
    console.log(`Name: ${this.title}`);
    console.log(`Artist(s): ${this.artists}`);
    console.log(`Duration (min.): ${this.durationMin}`);
    console.log('Tracks:');
    this.tracks.forEach((track) => {
      console.log(`- ${track.title}`);
    });
    console.log();
  }
}

module.exports = Album;
