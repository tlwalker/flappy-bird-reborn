'use strict';

function Ground(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  this.autoScroll(-200, 0);

  game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
}

Ground.prototype = Object.create(Phaser.TileSprite.prototype)
Ground.constructor = Ground;

module.exports = Ground;
