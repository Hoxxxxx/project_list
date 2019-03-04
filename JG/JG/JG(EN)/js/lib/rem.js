!(function(win,doc){

	function setFontSize(){
		var docEl = doc.documentElement;
		var winWidth=docEl.clientWidth;
		if (winWidth>=1350){
			doc.documentElement.style.fontSize = (winWidth / 1920) * 100+'px';
		}else if(winWidth>=1200){
            doc.documentElement.style.fontSize = (winWidth / 1920) * 100+'px';
		}else if(winWidth < 1200 && winWidth> 800){
			doc.documentElement.style.fontSize = (winWidth / 1300) * 100+'px';
		}else if(winWidth<=800){
            doc.documentElement.style.fontSize = (winWidth / 750) * 100+'px';
		}
		//var navbottom = $(".nav-r-box").css("bottom")
        //
		//if(winWidth>=1200 && winWidth <= 1350 ){

		//	document.querySelector(".nav-r-box").style.bottom = "-60px"
		//}else {
		//	document.querySelector(".nav-r-box").style.bottom = navbottom
		//}


	}
	var evt = 'orientationchange' in win ? 'orientationchange' : 'resize';
	var timer = null;
	win.addEventListener(evt,function(){
		clearTimeout(timer);
		timer = setTimeout(setFontSize, 300);
	}, false);
	win.addEventListener('pageshow',function(e){
		if (e.persisted) {
			clearTimeout(timer);
			timer = setTimeout(setFontSize, 300);
		}
	},false);
	setFontSize();
}(window,document));


