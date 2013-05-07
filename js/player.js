var Player = function player(r,x,y,id){
	this.dir = 'r';
	this.motion = 'stand';
	this.holding = false;

	this.reflectorCanMove = function(dir){
		return this.reflectorInFront().canMove(dir);
	};

	this.reflectorInFront = function(){
		var reflectorX = this.x;
		var reflectorY = this.y;
		switch(this.dir){
			case 'u':
				reflectorY--;
				break;
			case 'd':
				reflectorY++;
				break;
			case 'l':
				reflectorX--;
				break;
			case 'r':
				reflectorX++;
				break;
		}

		var infront = this.r.items[reflectorX][reflectorY];
		if( typeof(infront) != 'undefined' && infront.getName() == 'reflector' ){
			return infront;
		} else {
			return undefined;
		}
	};

	this.hasReflectorInFront = function(){
		return typeof(this.reflectorInFront()) != 'undefined';
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
		} else if( this.hasReflectorInFront() ){
			this.reflectorInFront().move(dir);
		}

		switch(dir){
			case 'u':
				this.y--;
				break;
			case 'd':
				this.y++;
				break;
			case 'l':
				this.x--;
				break;
			case 'r':
				this.x++;
				break;
		};

		this.r.items[this.x][this.y] = this;
		drawItem(this);

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
