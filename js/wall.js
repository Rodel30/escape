var Wall = function wall(r,x,y,id){
	this.img = function(){
		return 'imgs/wall.gif';
	}
	this.canMove = function(dir){return false;}
	this.init(r,x,y,id);
}
Wall.prototype = new Item();
Wall.prototype.constructor = Wall;
