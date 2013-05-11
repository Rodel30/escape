var Player = function player(r,x,y,id){
	this.dir = 'r';
	this.motion = 'stand';
	this.holding = false;

	this.movableItemCanMove = function(dir){
		return this.movableItemInFront().canMove(dir);
	};

	this.movableItemInFront = function(){
		var itemX = this.x;
		var itemY = this.y;
		switch(this.dir){
			case 'u':
				itemY--;
				break;
			case 'd':
				itemY++;
				break;
			case 'l':
				itemX--;
				break;
			case 'r':
				itemX++;
				break;
		}

		var infront = this.r.items[itemX][itemY];
		if( typeof(infront) != 'undefined' && infront.isMovable() ){
			return infront;
		} else {
			return undefined;
		}
	};

	this.hasMovableItemInFront = function(){
		return typeof(this.movableItemInFront()) != 'undefined';
	};

	this.img = function(){
		return 'imgs/hero/' + this.motion +'/'+ this.dir + '.gif';
	};

	this.move = function(dir){
		if( this.moving ){ return false; }
		this.moving = true;

		this.r.items[this.x][this.y] = undefined;

		if( !keysDown[32] ){
			this.dir = dir;
		} else if( this.hasMovableItemInFront() ){
			this.movableItemInFront().move(dir);
		}

		var locInDir = this.locationInDirection(dir, [this.x,this.y]);
		this.x = locInDir[0];
		this.y = locInDir[1];

		this.r.items[this.x][this.y] = this;
		drawItem(this);

		this.r.drawLasers();

		var p = this;
		setTimeout(function(){
			p.moving = false;
			p.r.checkMove();
		}, 200);
	}

	this.init(r,x,y,id);
}
Player.prototype = new Item();
Player.prototype.constructor = Player;
