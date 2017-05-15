// base box construct
var HoverData = function(game){
	Phaser.Text.call(this,game,
		game.world.width*0.8,game.world.height/2,'Bada Bing',
		{font:'20px Arial',fill:'#ff0044',align:'center'});
};
HoverData.prototype = Object.create(Phaser.Text.prototype);
HoverData.constructor = HoverData;
HoverData.prototype.hovering = function(name) {
	// update text
	this.setText(name);
};