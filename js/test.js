var num = prompt("What number would you like me to ping-pong up to?");

for (var i = 1; i <= num; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Ping-pong!");
		para.appendChild(node);

		var element = document.getElementById("div1");
  	element.appendChild(para).setAttribute("class", "pingpong");


	} else if (i % 3 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Ping!");
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para).setAttribute("class", "ping");


	} else if (i % 5 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Pong!");
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para).setAttribute("class", "pong");



	} else {
		var para = document.createElement("p");
		var node = document.createTextNode(i);
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para).setAttribute("class", "p");

	}
}

$(function() {
	$('div p').each(function(i) {
		$(this).delay((i++) * 200).fadeTo(150, 1); })
});

// $(function() {
// 	$('div p.ping').each(function(i) {
// 		$(this).delay((i++) * 200).fadeTo(200, 1).animate({"margin-right": '+=200'}); })
// });

// // $(function() {
// // 	$('div .ping').each(function(i) {
// // 		$(this).delay((i++) * 200).fadeTo(1000, 1).animate({"margin-right": '+=200'}); })
// // });

// $(function() {
// 	$('div .pong').each(function(i) {
// 		$(this).delay((i++) * 200).fadeTo(200, 1).animate({"margin-left": '+=200'}); })
// });

// $(function() {
// $('#fds img').each(function(i) {
// $(this).delay((i++) * 500).fadeTo(1000, 1); })
// });

var para = document.createElement("h2");
var node = document.createTextNode("Thanks for playing!");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);