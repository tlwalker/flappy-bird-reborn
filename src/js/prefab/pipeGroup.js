'use strict';
var Pipe = require('./pipe');

function PipeGroup(game, parent) {
  Phaser.Group.call(this, game, parent);

  this.topPipe = new Pipe(game, 0, 0, 0);
  this.add(this.topPipe);

  this.bottomPipe = new Pipe(game, 0, 440, 1);
  this.add(this.bottomPipe);

  this.hasScored = false;

  this.setAll('body.velocity.x', -200);


}

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.constructor = PipeGroup;

PipeGroup.prototype.reset = function(x, y) {
  this.topPipe.reset(0, 0);
  this.bottomPipe.reset(0, 440);

  this.x = x;
  this.y = y;

  this.setAll('body.velocity.x', -200);
  this.hasScored = false;
  this.exists = true;
};

PipeGroup.prototype.checkWorldBounds = function() {
  if (!this.topPipe.inWorld) {
    this.exists = false;
  }
};

PipeGroup.prototype.update = function() {
  this.checkWorldBounds();
};

module.exports = PipeGroup;
