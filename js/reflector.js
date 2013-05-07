var Reflector = function reflector(r,x,y,id){
	this.img = function(){
		return 'imgs/reflector.gif';
	}
	this.init(r,x,y,id);
}
Reflector.prototype = new Item();
Reflector.prototype.constructor = Reflector;
