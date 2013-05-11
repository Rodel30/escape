$(document).ready(function(){
	room = new Room(rooms[0]);

	$('#reset').click(function(){
		room = new Room(rooms[curLevel]);
	});

	$('#nextlvl').click(function(){
		if( typeof(rooms[curLevel+1]) != 'undefined'){
			curLevel++;
			room = new Room(rooms[curLevel]);
		} else {
			$('#endoflvls').show();
		}
		$(this).hide();
	}).hide();

	$('#endoflvls').hide();
});

// l 37, u 38, r 39, d 40, space 32
$(document).keydown(function(e){
	if([37,38,39,40,32].indexOf(e.which) > -1){
		keysDown[e.which] = true;
		e.preventDefault();
		if(e.which != 32 && !room.player.moving ){
			room.checkMove();
		}
	}
});
$(document).keyup(function(e){
	if([37,38,39,40,32].indexOf(e.which) > -1){
		keysDown[e.which] = false;
		e.preventDefault();
	}
});
$(document).keypress(function(e){
	if(e.which == 13){
		if( $('#nextlvl').is(':visible') ){
			$('#nextlvl').click();
		} else if( $('#dead').is(':visible') ){
			$('#reset').click();
		}
	}
});
