function btn1() {
	document.getElementById("answer").innerText = "I'm Right!";
}

function btn2() {
	document.getElementById("answer").innerText = "No, I'm Right!";
}




function changeText(text) {
	var display = document.getElementById('display-text');
	display.innerHTML = text;
}



function changeH1(event) {
	var x = event.keyCode;
	var title = document.getElementsByTagName('h1');
	title[0].innerHTML = String.fromCharCode(x);

}