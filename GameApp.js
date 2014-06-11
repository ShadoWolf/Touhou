function GameApp(newContext) {
    var FRAME_PER_SECOND = 60;
    
    var context = newContext;
    var loader;
    var game;
    var isRunning = false;
    var lastTime;
    
    var requestAnimFrame = (function(){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback){
                window.setTimeout(callback, 1000 / FRAME_PER_SECOND);
            };
    })();
    
    this.run = function(context) {
        loader = new Loader();
        var stageResources = ['img/player00.png', 'img/stg1bg.png'];
        loader.loadResourses(stageResources);
        loader.onReady(init);
    }
    
    function init() {
        context.createPattern(resources.get('img/stg1bg.png'), 'repeat');
        reset();
        lastTime = Date.now();
        isRunning = true;
        main();
    }
    /*
        Main game cycle
    */
    function main() {
        var gameTimer = setInterval(
            function() {
                update();
                display();
                if (!isRunning) clearTimeout(gameTimer);
            }, 
            1000 / FRAME_PER_SECOND
        );
    }
    
    /*
        Changes the state of the game every tick of timer
    */
    function update() {
    }
    /*
        Shows current state of the game on canvas
    */
    function display() {
    }
}