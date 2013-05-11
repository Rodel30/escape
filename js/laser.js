var Laser = function laser(r,x,y,d,id){
	this.img = function(){
		return 'imgs/laser-'+this.d+'.gif';
	};

	this.calcPath = function(){

		var qDir = function(q,d){
			var qds = [];
			qds[1] = {l:'u', d:'r'};
			qds[2] = {d:'l', r:'u'};
			qds[3] = {r:'d', u:'l'};
			qds[4] = {u:'r', l:'d'};

			return qds[q][d];
		};

		this.path = [];

		var dir = this.d;
		var loc = [this.x, this.y];

		while( true ){
			loc = this.locationInDirection(dir, loc);
			if(loc[0] > this.r.x || loc[0] < 1 || loc[1] < 1 || loc[1] > this.r.y){
				this.end.x = loc[0];
				this.end.y = loc[1];
				break;
			}

			var blk = this.r.items[loc[0]][loc[1]];
			if(typeof blk == 'undefined'){
				var im = ['u','d'].indexOf(dir) > -1 ? 'v' : 'h';
				this.path.push({x:loc[0], y:loc[1], i:im});
			} else if(blk.getName() == 'reflector' && qDir(blk.q, dir) != undefined){
				this.path.push({x:loc[0], y:loc[1], i:blk.q})
				dir = qDir(blk.q, dir);
			} else if(blk.getName() == 'player'){
				this.r.killPlayer(blk);
				break;
			} else if(blk.getName() == 'target'){
				blk.enabled = true;
				break;
			} else {
				this.end.x = loc[0];
				this.end.y = loc[1];
				break;
			}
		}
	};

	this.d = d;
	this.end = {};
	this.init(r,x,y,id);
}
Laser.prototype = new Item();
Laser.prototype.constructor = Laser;
