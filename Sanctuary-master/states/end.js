// end game
var endState = {
	create:function(){
		// menu text(s)
		var instruction = game.add.text(0,0,'Game Over',
			{font:"30pt Courier",fill:"#19cb65",stroke:"#119f4e",strokeThickness:2});
	},
	update:function(){
		// if LMB is clicked, then start game
		if(game.input.activePointer.leftButton.isDown){
			game.state.start('play');
		}
	}
};