function Menu() {
	var canvas;
	var context;

	this.init = function() {
		canvas = document.createElement("canvas");
        context = canvas.getContext("2d");
        canvas.width = 256;
        canvas.height = 570;
        canvas.style.position = "absolute";
        canvas.style.zIndex = 0;
        canvas.style.left = "527px";
        canvas.style.top = "15px";
        document.body.appendChild(canvas);
	}

	this.draw = function() {

	}
}