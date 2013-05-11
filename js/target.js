var Target = function target(r,x,y,id){
	this.img = function(){
		return 'imgs/target.gif';
	}
	this.init(r,x,y,id);
	this.enabled = false;
}
Target.prototype = new Item();
Target.prototype.constructor = Target;
