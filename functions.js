var vid = document.getElementById("homepagevideo1");
var vid2 = document.getElementById("homepagevideo2");
var vid3 = document.getElementById("homepagevideo3");

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
}
function playVid2() {
  vid2.play();
}

function pauseVid2() {
  vid2.pause();
}
function playVid3() {
  vid3.play();
}

function pauseVid3() {
  vid3.pause();
}
function rewatchVid() {
  document.getElementById("hmp2").src = "overwatch 2 trailer.mp4";
  document.getElementById("hmp2").src = "overwatch 2 trailer.ogg";
  document.getElementById("homepagevideo1").load();
}
function rewatchVid2() {
  document.getElementById("hmp3").src = "overwatchtrailer.mp4";
  document.getElementById("hmp3").src = "overwatchtrailer.ogg";
  document.getElementById("homepagevideo2").load();
}
function rewatchVid3() {
  document.getElementById("hmp").src = "Ramattra Origin Story _ Overwatch 2.mp4";
  document.getElementById("hmp").src = "Ramattra Origin Story _ Overwatch 2.ogg";
  document.getElementById("homepagevideo3").load();
}