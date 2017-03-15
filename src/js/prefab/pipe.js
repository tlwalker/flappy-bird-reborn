'use strict';

function Pipe(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pipe', frame);
  this.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;
}

Pipe.prototype = Object.create(Phaser.Sprite.prototype);
Pipe.constructor = Pipe;

module.exports = Pipe;