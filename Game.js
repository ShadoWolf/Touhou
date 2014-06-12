function Game() {
    var STATE_LOADING = 1;
    var STATE_MENU = 2;
    var STATE_GAME = 3;
    
    var canvas;
    var context;
    
    this.init = function(options) {
        canvas = document.createElement("canvas");
        context = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 570;
        canvas.style.position = "absolute";
        canvas.style.zIndex = 1;
        canvas.style.left = "15px";
        canvas.style.top = "15px";
        document.body.appendChild(canvas);
        createBackground(options.background);
    }
    this.update = function() {
    }
    this.display = function() {
    }
    
    this.setState = function(newState) {
        state = newState;
    }
    this.isRunning = function() {
    }

    function createBackground(backgroundSprite) {
        var pattern = context.createPattern(backgroundSprite, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
}