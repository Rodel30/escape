var Room = function(rm){
	this.x = rm.dim[0];
	this.y = rm.dim[1];
	this.ex = rm.exit[0];
	this.ey = rm.exit[1];
	this._finished = false;

	drawRoom(this);

	this.finish = function(){
		this._finished = true;
	};

	this.items = [];
	this.items[0] = [];
	for( var i = 1; i <= this.x; i++ ){
		this.items[i] = [];
	}
	this.items[this.x+1] = [];


	this.player = new Player(this,rm.spawn[0],rm.spawn[1],'p1');
	this.boxes = [];
	var _this = this;
	$.each(rm.boxes, function(i,b){
		_this.boxes.push(new Box(_this,b[0],b[1],'b'+i));
	});
	this.pillars = [];
	$.each(rm.pillars, function(i,w){
		_this.pillars.push(new Pillar(_this,w[0],w[1],'w'+i));
	});

	this.checkMove = function(){
		if( this.player.moving || this._finished ){ return false; }
		if( this.player.x == this.ex && this.player.y == this.ey ){
			this.finish();
			return false;
		}
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
