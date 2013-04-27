var Item = function item(){
	this.init = function(r,x,y,id){
		this.x = x;
		this.y = y;
		this.id = id;
		this.r = r;
		this.moving = false;

		this.r.items[this.x][this.y] = this;

		cacheImg(this.img(), this.id);
		drawItem(this);
	}

	this.move = function(dir){
		this.r.items[this.x][this.y] = undefined;

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
		}

		this.r.items[this.x][this.y] = this;
		drawItem(this);
	}

	this.canMove = function(dir){
		var atEdge = true;
		var objInWay = true;
		switch(dir){
			case 'u':
				atEdge = this.y <= 1;
				objInWay = typeof(this.r.items[this.x][this.y-1]);
				break;
			case 'd':
				atEdge = this.y >= this.r.y;
				objInWay = typeof(this.r.items[this.x][this.y+1]);
				break;
			case 'l':
				atEdge = this.x <= 1;
				objInWay = typeof(this.r.items[this.x-1][this.y]);
				break;
			case 'r':
				atEdge = this.x >= this.r.x;
				objInWay = typeof(this.r.items[this.x+1][this.y]);
				break;
		}
		var heldItemCanMove = true;
		if( keysDown[32] && this.getName() == 'player' && this.hasBoxInFront()){
			if(this.dir == dir){
				//This would be the box, so say it's not there, as it would be moving.
				objInWay = 'undefined';
				heldItemCanMove = this.boxCanMove(dir);
			} else if( isOppDir(this.dir, dir) ){
				//The box is going to where the player currently is
				heldItemCanMove = true;
			} else {
				heldItemCanMove = this.boxCanMove(dir);
			}
		}
		return !(atEdge || objInWay != 'undefined') && heldItemCanMove;
	}
}