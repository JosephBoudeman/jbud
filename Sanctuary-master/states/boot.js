// start physics system and call load state
var bootState = {
	create:function(){
		console.log('booting up');
		// start arcade physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// call load state
		game.state.start('load');
	}
};