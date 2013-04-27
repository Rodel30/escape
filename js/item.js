var Item = function(){
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
		if( this.moving ){ return false; }
		this.moving = true;

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


		if( !keysDown[32] ){
			this.dir = dir;
		}

		this.r.items[this.x][this.y] = this;
		drawItem(this);

		var p = this;
		setTimeout(function(){
			p.moving = false;
			p.r.checkMove();
		}, 200);
	}

	this.canMove = function(dir){
		if( this.moving ){ return false; }
		var atEdge = true;
		var objAbove = true;
		switch(dir){
			case 'u':
				atEdge = this.y <= 1;
				objAbove = typeof(this.r.items[this.x][this.y-1]);
				break;
			case 'd':
				atEdge = this.y >= this.r.y;
				objAbove = typeof(this.r.items[this.x][this.y+1]);
				break;
			case 'l':
				atEdge = this.x <= 1;
				objAbove = typeof(this.r.items[this.x-1][this.y]);
				break;
			case 'r':
				atEdge = this.x >= this.r.x;
				objAbove = typeof(this.r.items[this.x+1][this.y]);
				break;
		}
		return !(atEdge || objAbove != 'undefined');
	}
}