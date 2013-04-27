var Player = function(r,x,y,id){
	this.dir = 'r';
	this.motion = 'stand';
	this.holding = false;

	this.img = function(){
		return '/imgs/hero/' + this.motion +'/'+ this.dir + '.gif';
	}

	this.init(r,x,y,id);
}
Player.prototype = new Item();
Player.prototype.constructor = Player;
