window.onload = function() {
				var imglis = document.getElementsByClassName("ig");
				var dotlis = document.getElementsByClassName("dot");
				//自动轮播代码块
				var index = 0;
				var timer = window.setInterval(show, 1000);

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
						index = 0

					}
				}
				//鼠标移入
				for (var i = 0; i < dotlis.length; i++) {
					dotlis[i].onmousemove = function() {
						window.clearInterval(timer);
						for (var
								j = 0; j < dotlis.length; j++) {
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
			}