// base box construct
var Gate = function(game){
	Phaser.Sprite.call(this,game,
		game.world.width-100,game.world.height/2,'box');

	// scale image
	//this.scale.setTo(2,2);
	
	// set the pivot point to be the center
	this.anchor.setTo(0.5,0.5);

	// enable physics
	game.physics.enable(this,Phaser.Physics.ARCADE);

	// define constants that affect motion
};
Gate.prototype = Object.create(Phaser.Sprite.prototype);
Gate.constructor = Gate;
Gate.prototype.update = function(){
	// update next destination
};

Gate.prototype.checkBox = function(box,gate,func){
	console.log('gate checking box');
	box.angle = 0;
	box.body.velocity.x = 0;
	box.body.velocity.y = 0;
	//box.x = gate.x + 50;
	//box.y = gate.y + 50;
	if(box.width <= gate.width && box.height <= gate.height) func(box,gate,true);
	else func(box,gate,false);
};