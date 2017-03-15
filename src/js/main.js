'use strict';

var game, ns = {
  Boot: require('./boot'),
  Preloader: require('./preloader'),
  Menu: require('./menu'),
  Game: require('./game')
};

game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn-game');
game.state.add('boot', ns.Boot);
game.state.add('preloader', ns.Preloader);
game.state.add('menu', ns.Menu);
game.state.add('game', ns.Game);

game.state.start('boot');