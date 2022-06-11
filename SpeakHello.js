

(function (window) {
var helloSpeaker ={};
helloSpeaker.speak = "name";
  var speakWord = "Hello";
  function speak(name) {
  console.log(speakWord + " " + helloSpeaker.name);
}
  window.helloSpeaker = helloSpeaker;
 })(window);
