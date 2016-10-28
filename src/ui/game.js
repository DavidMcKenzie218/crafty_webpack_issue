var Crafty = require('craftyjs');

var Game = function(){

  this.render();
  
}

Game.prototype = {

  render: function(){
    Crafty.init(400, 400);
    Crafty.background('black');
  }

}

module.exports = Game;