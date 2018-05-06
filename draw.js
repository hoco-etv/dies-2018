$(document).ready(function(){
	var svg = [],
		$win = $(window),
        winHeight = window.innerHeight,
		started = [0,0,0,0,0,0],
		p,
		startTime = 5000,
		startTimer,
		userInitiated = 1,
		body = $("html, body"),
		dichttiks;
	
	var end = Date.UTC(2018, 4, 14, 11,21,12), // Bravo 112!
			h1 = document.getElementById('countdown');
		console.log(end);
		(function f() {
			var diff = (end - Date.now())/1e3,
				y = Math.floor(diff/(3600*24*7*52)),
				w = Math.floor((diff-(y*3600*24*7*52))/(3600*24*7)),
				d = Math.floor((diff-(y*3600*24*7*52)-(w*3600*24*7))/(3600*24)),
				h = Math.floor((diff-(y*3600*24*7*52)-(w*3600*24*7)-(d*3600*24))/(3600)),
				m = Math.floor((diff-(y*3600*24*7*52)-(w*3600*24*7)-(d*3600*24)-(h*3600))/(60)),
				s = Math.floor((diff-(y*3600*24*7*52)-(w*3600*24*7)-(d*3600*24)-(h*3600)-(m*60))/(1));
//			console.log("years: "+y+" Weeks: "+w+" Days: "+d+" Hours: "+h+" Minutes: "+m+" Seconds: "+s);
			h1.textContent = "Nog " + (w > 1 ? w+' weken, ' : (w>0 ? w + ' week, ' : '')) + (d > 1 ? d + ' dagen, ' : (d > 0 ? d + ' dag, ' : '')) + (h > 0 ? h + ' uur, ' : (d>0||w>0 ? '0 uur, ' : ''))+ (m > 1 ? m + ' minuten, ' : (m > 0 ? m + ' minuut, ' : (w>0||d>0||h>0 ? '0 minuten, ' : ''))) + '(112' + (s-112) + ') seconden';
			setTimeout(f, 1e3);
		})();
	
	
	svg[0] = $("#Maandag__x3C_head_x3E_").drawsvg();
	svg[1] = $("#Dinsdag__x3C_head_x3E_").drawsvg();
	svg[2] = $("#Woensdag__x3C_head_x3E_").drawsvg();
	svg[3] = $("#Donderdag__x3C_head_x3E_").drawsvg();
	svg[4] = $("#Vrijdag__x3C_head_x3E_").drawsvg();
	svg[5] = $("#Maandag").drawsvg();
	svg[6] = $("#Dinsdag").drawsvg();
	svg[7] = $("#Woensdag").drawsvg();
	svg[8] = $("#Donderdag").drawsvg();
	svg[9] = $("#Vrijdag").drawsvg();
	svg[10] = $("#_x3C_footer_x3E_").drawsvg();
	svg[11] = $("#footer").drawsvg();
	
	startTimer = setInterval(function(){
		$win.scrollTop(winHeight);
		body.stop().animate({scrollTop:$(document).height()}, 35000, 'swing', function() {
			$win.scrollTop(winHeight);
		});
	}, startTime);
    
    $win.on('scroll', function() {
		if(userInitiated){
			clearInterval(startTimer);
		}
		dichttiks = Math.round(($win.scrollTop()/($(document).height()*0.89)*600));
		console.log('You see me scrolling...  '+(dichttiks==112 ? 'Bravo 112! ' : dichttiks));
		p = ($win.scrollTop()-winHeight)/(0.85*($(document).height()-winHeight))*6;
		if(p<1){
			if(!started[0]){svg[0].drawsvg('animate');
							svg[5].drawsvg('animate')};
			started[0] = 1;
		}else if(p<2){
			if(!started[1]){svg[1].drawsvg('animate');
							svg[6].drawsvg('animate')};
			started[1] = 1;
		} else if(p<3){
			if(!started[2]){svg[2].drawsvg('animate');
							svg[7].drawsvg('animate')};
			started[2] = 1;
		}else if(p<4){
			if(!started[3]){svg[3].drawsvg('animate');
							svg[8].drawsvg('animate')};
			started[3] = 1;
		}else if(p<5){
			if(!started[4]){svg[4].drawsvg('animate');
							svg[9].drawsvg('animate')};
			started[4] = 1;
		}else if(p<6){
			if (!started[5]) {svg[10].drawsvg('animate');svg[11].drawsvg('animate');};
			started[5] = 1;
		}
    });
});
