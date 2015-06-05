var num = prompt("What number would you like me to ping-pong up to?");

for (var i = 1; i <= num; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Ping-pong!!");
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para);
	} else if (i % 3 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Ping");
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para);
	} else if (i % 5 === 0) {
		var para = document.createElement("p");
		var node = document.createTextNode("Pong");
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para);
	} else {
		var para = document.createElement("p");
		var node = document.createTextNode(i);
		para.appendChild(node);

		var element = document.getElementById("div1");
		element.appendChild(para);
	}
}

var para = document.createElement("h2");
var node = document.createTextNode("Thanks for playing!");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);