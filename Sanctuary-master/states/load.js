// load in assets and call menu state
var loadState = {
	preload:function(){
		// loading text(s)

		// load in assets
		this.game.load.image('box','assets/imgs/box.jpg');
	},
	create:function(){
		console.log('loading');
		// call menu state
		game.state.start('menu');
	}
};