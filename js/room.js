var Room = function(x,y){
	this.x = x;
	this.y = y;

	drawRoom(this);

	this.items = [];
	this.items[0] = [];
	for( var i = 1; i <= this.x; i++ ){
		this.items[i] = [];
	}
	this.items[x+1] = [];


	this.player = new Player(this,1,3,'p1');
	this.boxes = [];
	this.boxes.push(new Box(this,2,3,'b1'));
	this.boxes.push(new Box(this,3,2,'b2'));
	this.boxes.push(new Box(this,6,3,'b3'));
	this.pillars = [];
	this.pillars.push(new Pillar(this,3,3,'w1'));
	this.pillars.push(new Pillar(this,6,5,'w2'));
	this.pillars.push(new Pillar(this,5,5,'w3'));

	this.checkMove = function(){
		if( this.player.moving ){ return false; }
		var rm = this;
		$.each([37,38,39,40,0], function(i,v){
			if( keysDown[v] ){
				if( rm.player.canMove(dirMap[v]) ){
					rm.player.move(dirMap[v]);
					return false;
				} else {
					if( !keysDown[32] ){
						rm.player.dir = dirMap[v];
						drawItem(rm.player);
					}
				}
			}
		});
	};

}
