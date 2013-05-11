var Reflector = function reflector(r,x,y,q,id){
	this.img = function(){
		return 'imgs/reflector-'+this.q+'.gif';
	}
	this.q = q;
	this.init(r,x,y,id);
}
Reflector.prototype = new Item();
Reflector.prototype.constructor = Reflector;
