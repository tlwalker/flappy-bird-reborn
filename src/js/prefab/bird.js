'use strict';

function Bird(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);

  this.alive = false;

  game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.flapSound = this.game.add.audio('flap');
}
Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.constructor = Bird;

Bird.prototype.flap = function() {
  this.flapSound.play();
  
  this.body.velocity.y = -400;

  this.game.add.tween(this).to({
    angle: -40
  }, 100).start();
};

Bird.prototype.update = function() {
  if (this.angle < 90 && this.alive) {
    this.angle += 2.5;
  }
};

module.exports = Bird;