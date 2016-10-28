var Game = require('./ui/game.js');

var app = function(){
  new Game();
}

window.onload = app;