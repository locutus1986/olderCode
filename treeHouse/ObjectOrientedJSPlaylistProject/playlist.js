function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length){
    this.nowPlayingIndex = 0; 
  }
  this.play();
};

Playlist.prototype.next = function() {

};

Playlist.prototype.renderInElement = function() {
  list.innerHTML = "";
  for (var i = 0; i <= songs.length; i++){
    list.innerHTML += this.songs[i].toHTML();
  }
};