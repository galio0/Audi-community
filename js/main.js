//Варнаа
var container = document.getElementById("info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {

	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://api.myjson.com/bins/6k3it');
	myRequest.onload = function(){
		var ourData = JSON.parse(myRequest.responseText);
		renderHTML(ourData);
};
	myRequest.send();

	});

function renderHTML(data) {
	var htmlString = "";
	for(i=0; i<data.length; i++) {
		htmlString +="<p>" + "Дата: " + data[i].date +"<br>" + "Час: " + data[i].time +"<br>"+ "Място: "+ data[i].place + "</p";
	}

	container.insertAdjacentHTML('afterbegin', htmlString);
}

//Бургас
	var container1 = document.getElementById("info1");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {

	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://api.myjson.com/bins/1fzgz9');
	myRequest.onload = function(){
		var ourData = JSON.parse(myRequest.responseText);
		renderHTML1(ourData);
};
	myRequest.send();
	});

function renderHTML1(data) {
	var htmlString1 = "";
	for(i=0; i<data.length; i++) {
		htmlString1 +="<p>" + "Дата: " + data[i].date +"<br>" + "Час: " + data[i].time +"<br>"+ "Място: "+ data[i].place + "</p";
	}

	container1.insertAdjacentHTML('beforeend', htmlString1);
}

//София
var containerSf = document.getElementById("info-sf");
var btnSf = document.getElementById("btn-sf");
btnSf.addEventListener("click", function() {

	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://api.myjson.com/bins/19o9yt');
	myRequest.onload = function(){
		var ourData = JSON.parse(myRequest.responseText);
		renderHTML2(ourData);
};
	myRequest.send();
	});

function renderHTML2(data) {
	var htmlString2 = "";
	for(i=0; i<data.length; i++) {
		htmlString2 +="<p>" + "Дата: " + data[i].date +"<br>" + "Час: " + data[i].time +"<br>"+ "Място: "+ data[i].place + "</p";
	}

	containerSf.insertAdjacentHTML('beforeend', htmlString2);
}
