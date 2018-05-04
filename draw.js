$(document).ready(function(){
	var svg = $("#circuit-svg").drawsvg(), 
		$win = $(window),
        winHeight = window.innerHeight,
		started = 0;

    
    $win.on('scroll', function() {
//		console.log('You see me scrolling...'+($win.scrollTop()/(0.89*$(document).height())));
//		p = ($win.scrollTop()-winHeight)/(0.85*($(document).height()-winHeight));
//		p>1 ? p = 1 : p=p; 
//        svg.drawsvg('progress', p);
		started? started = 1 : svg.drawsvg('animate');
		started = 1;
    });
});