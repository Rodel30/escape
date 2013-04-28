var room;
var keysDown = [];
	keysDown[32] = false;
	keysDown[37] = false;
	keysDown[38] = false;
	keysDown[39] = false;
	keysDown[40] = false;
var dirMap = [];
	dirMap[37] = 'l';
	dirMap[38] = 'u';
	dirMap[39] = 'r';
	dirMap[40] = 'd';
var isOppDir = function(d1, d2){
	switch(d1){
		case 'u':
			return d2 == 'd';
			break;
		case 'd':
			return d2 == 'u';
			break;
		case 'l':
			return d2 == 'r';
			break;
		case 'r':
			return d2 == 'l';
			break;
	}
}
var curLevel = 0;