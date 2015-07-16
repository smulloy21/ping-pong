var puthis = function (where, what) {
	var para = document.createElement(where);
	var node = document.createTextNode(what);
	para.appendChild(node);

	var element = document.getElementById("div1");
	element.appendChild(para);
};

var pingPong = function(){

	var num = prompt("What number would you like me to ping-pong up to?");

	if (parseInt(num) !== NaN ) {

		for (var i = 1; i <= num; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				puthis("p", "Ping-pong!");
			} else if (i % 3 === 0) {
				puthis("p", "Ping");
			} else if (i % 5 === 0) {
				puthis("p", "Pong");
			} else {
				puthis("p", i);
			}
		}
	}
};

pingPong();

$('div p').each(function(i) {
	if (i % 3 === 0 && i % 5 === 0) {
		$(this).delay((i++) * 400).fadeTo(175, 1);
	} else if (i % 3 === 0) {
		$(this).delay((i++) * 400).fadeTo(175, 1).animate({right: '30%'}, 175);
	} else if (i % 5 === 0) {
		$(this).delay((i++) * 400).fadeTo(175, 1).animate({left: '30%'}, 175);
	} else {
		$(this).delay((i++) * 400).fadeTo(175, 1);
	}
});


puthis("h2", "Thanks for playing!");