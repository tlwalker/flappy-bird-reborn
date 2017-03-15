'use strict';

function Preloader() {
  this.asset = null;
  this.ready = false;
}

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(this.width/2, this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    
    this.loadImages();
    
    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');
    
    this.loadSpritesheets();
    
    this.loadSounds();
  },
  
  loadImages: function(){
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('instructions', 'assets/instructions.png');
    this.load.image('getReady', 'assets/get-ready.png');
    this.load.image('scoreboard', 'assets/scoreboard.png');
    this.load.image('gameover', 'assets/gameover.png');
    this.load.image('particle', 'assets/particle.png');
  },
  loadSounds: function(){
    this.load.audio('score', 'assets/score.wav');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('pipeHit', 'assets/pipe-hit.wav');
    this.load.audio('groundHit', 'assets/ground-hit.wav');
  },
  loadSpritesheets: function(){
    this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
    this.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);
    this.load.spritesheet('medals', 'assets/medals.png', 44, 46, 2);
  },
  create: function () {
    this.asset.cropEnabled = false;
  },
  
  update: function () {
    if (!!this.ready) {
      this.game.state.start('game');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};

module.exports = Preloader;