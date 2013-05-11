var Room = function(rm){
	this.x = rm.dim[0];
	this.y = rm.dim[1];
	this.exit = { x: rm.exit[0], y: rm.exit[1], enabled: false };
	this._finished = false;
	$('#dead').hide();

	drawRoom(this);

	this.finish = function(){
		this._finished = true;
		$('#nextlvl').show();
	};

	this.items = [];
	this.items[0] = [];
	for( var i = 1; i <= this.x; i++ ){
		this.items[i] = [];
	}
	this.items[this.x+1] = [];


	this.player = new Player(this,rm.spawn[0],rm.spawn[1],'p1');
	this.reflectors = [];
	var _this = this;
	$.each(rm.reflectors, function(i,b){
		_this.reflectors.push(new Reflector(_this,b[0],b[1],b[2],'r'+i));
	});
	this.boxes = [];
	var _this = this;
	$.each(rm.boxes, function(i,b){
		_this.boxes.push(new Box(_this,b[0],b[1],'b'+i));
	});
	this.walls = [];
	$.each(rm.walls, function(i,w){
		_this.walls.push(new Wall(_this,w[0],w[1],'w'+i));
	});
	this.targets = [];
	$.each(rm.targets, function(i,w){
		_this.targets.push(new Target(_this,w[0],w[1],'t'+i));
	});
	this.lasers = [];
	$.each(rm.lasers, function(i,w){
		_this.lasers.push(new Laser(_this,w[0],w[1],w[2],'l'+i));
	});

	this.checkMove = function(){
		if( this.player.moving || this._finished ){ return false; }
		if( this.player.x == this.exit.x && this.player.y == this.exit.y && this.exit.enabled ){
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

	this.drawLasers = function(){
		$.each(this.targets, function(i,t){
			t.enabled = false;
		});
		$.each(this.lasers, function(i,l){
			drawItem(l);
		});
		this.exit.enabled = true;
		var _this = this;
		$.each(this.targets, function(i,t){
			_this.exit.enabled = _this.exit.enabled && t.enabled;
		});
		if( this.exit.enabled ){
			$('.exit').addClass('on');
		} else {
			$('.exit').removeClass('on');
		}
	};

	this.killPlayer = function(player){
		this._finished = true;
		$('#dead').show();
	};

}
