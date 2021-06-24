

var msg = "欢迎进入我的简介";
var interval = 500;
var seq = 0;

function statuShow() {
	len = msg.length;
	document.title = msg.substring(seq, len) + msg.substring(0, seq);
	seq++;
	if (seq >= len) {
		seq = 0;
	}
	window.setTimeout("statuShow()", interval);
}
statuShow();


var c = ["darkviolet", " cadetblue", "yellow", "orange", "darkturquoise"];
var i = 0;

function changecolor() {
	document.getElementById("mydiv").style.color = c[i];
	i++;
	if (i >= c.length) {
		i = 0;
	}
}
var timeid;

function bianse() {
	timeid = window.setInterval("changecolor()", 1000);
}

function stopbianse() {
	window.clearInterval(timeid);
}




window.onload = function() {
	var imglis = document.getElementsByClassName("ig");
	var dotlis = document.getElementsByClassName("dot");
	var index = 0;
	var timer = window.setInterval(show, 1200);

	function show() {
		for (var i = 0; i < imglis.length; i++) {
			if (i == index) {
				imglis[i].classList.add("cur");
				dotlis[i].classList.add("cur");
			} else {
				imglis[i].classList.remove("cur");
				dotlis[i].classList.remove("cur");

			}
		}
		index++;
		if (index >= imglis.length) {
			index = 0;
		}
	}
	for (var i = 0; i < dotlis.length; i++) {
		dotlis[i].onmousemove = function() {
			window.clearInterval(timer);
			for (var j = 0; j < imglis.length; j++) {
				if (dotlis[j] == this) {
					index = j;
					imglis[j].classList.add("cur");
					dotlis[j].classList.add("cur");
				} else {
					imglis[j].classList.remove("cur");
					dotlis[j].classList.remove("cur");
				}
			}
		}
		dotlis[i].onmouseout = function() {
			timer = window.setInterval(show, 1000);
		}
	}

};
