
!(function(win,doc){
	// alert(111);
	function setFontSize(){
		var docEl = doc.documentElement;
		var winWidth=docEl.clientWidth;
		if(winWidth>=750){
            winWidth = 750
		}
		doc.documentElement.style.fontSize = (winWidth / 750) * 100+'px';
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

	//初始化
	setFontSize();
}(window,document));