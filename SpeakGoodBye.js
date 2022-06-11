
(function (window) {
  var byeSpeaker ={};
  byeSpeaker.speak = "name";
  var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + byeSpeaker.name);
}
  window.byeSpeaker = byeSpeaker;
})(window);


