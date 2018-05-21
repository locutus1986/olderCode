var playlist = new Playlist();

var decorationDay = new song("decoration day", "Jason Isbel", "5:56");
var theEndOfTheWorld = new song("The End Of the World as We know it","The Verb", "3:50");

Playlist.add(decorationDay);
Playlist.add(theEndOfTheWorld);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
  playList.play();
  playlistElement = document.getElementById("playlist");

}
var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.next();
  playlistElement = document.getElementById("playlist");

}
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.stop();
  playlistElement = document.getElementById("playlist");

}