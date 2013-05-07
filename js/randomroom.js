
var randRoom = function(){
	var dim = [7,5];
	var spawn = [1,2];
	var exit = [7,4];

	// Range size, lower bound
	var numW = Math.floor(Math.random() * 10) + 7;
	var numS = 7;

	var totS = dim[0] * dim[1];
	var numB = totS - numS - numW;

	var rm = [];
	for(var i = 1; i <= dim[0]; i++){
		rm[i] = [];
	}

	rm[spawn[0]][spawn[1]] = 'spawn';
	rm[exit[0]][exit[1]] = 'exit';

	var pillars = [];
	var pStrings = [];
	for(var i = 0; i < numW; i++){
		var x,y;
		do {
			var x = Math.ceil(Math.random() * dim[0]);
			var y = Math.ceil(Math.random() * dim[1]);
		} while(typeof(rm[x][y]) != 'undefined' || surroundsExit(x,y))
		pillars.push([x,y]);
		pStrings.push('['+x+','+y+']');
		rm[x][y] = 'wall';
	}
	console.log(pStrings.toString());

	var boxes = [];
	var bStrings = [];
	for(var i = 0; i < numB; i++){
		var x,y;
		do {
			var x = Math.ceil(Math.random() * dim[0]);
			var y = Math.ceil(Math.random() * dim[1]);
		} while( typeof(rm[x][y]) != 'undefined' )
		boxes.push([x,y]);
		bStrings.push('['+x+','+y+']');
		rm[x][y] = 'box';
	}
	console.log(bStrings.toString());


	var rmConf = {
		'boxes': boxes,
		'pillars': pillars,
		'exit': exit,
		'dim': dim,
		'spawn': spawn
	};

	function surroundsExit(x,y){
		var arndExit = [];
		arndExit.push((exit[0]+1) +','+exit[1]);
		arndExit.push((exit[0]-1) +','+exit[1]);
		arndExit.push(exit[0]+','+ (exit[1]+1));
		arndExit.push(exit[0]+','+ (exit[1]-1));
		if(arndExit.indexOf(x+','+y) != -1){
			var openings = 4;
			$.each(arndExit, function(i,v){
				coords = v.split(',');
				if(typeof(rm[coords[0]]) == 'undefined' || typeof(rm[coords[0]][coords[1]]) != 'undefined'){
					openings--;
				}
			});
			if( openings < 2 ){
				return true;
			}
		}
		return false;
	}

	//console.log(rmConf);
	return rmConf;
}