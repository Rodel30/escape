var Pillar = function pillar(r,x,y,id){
	this.img = function(){
		return 'imgs/pillar.gif';
	}
	this.canMove = function(dir){return false;}
	this.init(r,x,y,id);
}
Pillar.prototype = new Item();
Pillar.prototype.constructor = Pillar;
