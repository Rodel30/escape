var drawRoom = function(r){
	$hold = $('#cargo-hold');
	$hold.empty();
	for( var i = 1; i <= r.x; i++ ){
		$col = $('<ul />');
		for( var j = 1; j <= r.y; j++ ){
			$cell = $('<li />').attr('id', i + 'x' + j);
			$col.append($cell);
		}
		$hold.append($col);
	}
	$('#'+r.exit.x +'x'+ r.exit.y).addClass('exit');
};

var drawItem = function(p){
	var $p = $('img#'+p.id);
	var $cell = $('#'+p.x+'x'+p.y);
	$p.attr('src', p.img());
	$cell.append($p);

	if(p.getName() == 'laser'){
		p.calcPath();
		$('img[id^="'+p.id+'l"]').remove();
		$.each(p.path, function(i,l){
			var $cell = $('#'+l.x+'x'+l.y);
			var $l = cacheImg('imgs/laser-'+l.i+'.gif', p.id+'l'+i);
			$l.addClass('laser');
			$cell.append($l);
		});
	}
};

var cacheImg = function(src, id){
	var i = $('<img />').attr('src', src).attr('id', id);
	$('#cache').append(i);
	return i;
};
