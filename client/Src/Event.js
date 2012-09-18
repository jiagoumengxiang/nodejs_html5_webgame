var INPUT = {};
//onclick


function ONCLICK() {

}
//onmouseout


function ONMOUSEOUT() {
	INPUT.X = 0;
	INPUT.Y = 0;
}
//onmousemove


function ONMOUSEMOVE() {
	INPUT.X = event.offsetX;
	INPUT.Y = event.offsetY;
}
//onkeydown
document.ONKEYDOWN = function(ev) {
	var oEvent = ev || event;
	INPUT.KEY = oEvent.keyCode;
};
//onkeyup

document.ONKEYUP = function(ev) {
	var oEvent = ev || event;
	INPUT.KEY =0;
};