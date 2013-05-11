var Box = function box(r,x,y,id){
	this.img = function(){
		return 'imgs/box.gif';
	};

	this.isMovable = function(){
		return true;
	};

	this.init(r,x,y,id);
}
Box.prototype = new Item();
Box.prototype.constructor = Box;
