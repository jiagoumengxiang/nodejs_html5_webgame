var INPUT = {};
//onclick

function ONCLICK() {
	INPUT.onclick(INPUT.X,INPUT.Y);
}
//onmouseout
function ONMOUSEOUT() {
	INPUT.X = 0;
	INPUT.Y = 0;
}
function ONMOUSEOVER(){
	document.body.onkeydown=ONKEYDOWN;
	document.body.onkeyup=ONKEYUP;
}
//onmousemove
function ONMOUSEMOVE() {
	INPUT.X = event.offsetX;
	INPUT.Y = event.offsetY;
}

//onkeydown
function ONKEYDOWN(e) {
	if (window.event) // IE
	{
		INPUT.KEY = e.keyCode;
	} else if (e.which) // Netscape/Firefox/Opera
	{
		INPUT.KEY = e.which;
	}
}

//onkeyup
function ONKEYUP(e) {
	INPUT.KEY = 0;
}