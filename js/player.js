var Player = function player(r,x,y,id){
	this.dir = 'r';
	this.motion = 'stand';
	this.holding = false;

	this.boxCanMove = function(dir){
		return this.boxInFront().canMove(dir);
	};

	this.boxInFront = function(){
		var boxX = this.x;
		var boxY = this.y;
		switch(this.dir){
			case 'u':
				boxY--;
				break;
			case 'd':
				boxY++;
				break;
			case 'l':
				boxX--;
				break;
			case 'r':
				boxX++;
				break;
		}

		var infront = this.r.items[boxX][boxY];
		if( typeof(infront) != 'undefined' && infront.getName() == 'box' ){
			return infront;
		} else {
			return undefined;
		}
	};

	this.hasBoxInFront = function(){
		return typeof(this.boxInFront()) != 'undefined';
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
		} else if( this.hasBoxInFront() ){
			this.boxInFront().move(dir);
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
