// interactive menu for players to start the game
var menuState = {
	preload:function(){
		// menu text(s)
		var instruction = game.add.text(0,0,'Left Mouse Click to start',
			{font:"30pt Courier",fill:"#19cb65",stroke:"#119f4e",strokeThickness:2});
	},
	create:function(){
		console.log('menu');
		// allow for mouse input
		game.input.mouse.capture = true;
	},
	update:function(){
		// if LMB is clicked, then start game
		if(game.input.activePointer.leftButton.isDown){
			game.state.start('play');
		}
	}
};