function GameApp() {
    var FRAME_PER_SECOND = 60;

    var backgroundCanvas;
    
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
    
    this.run = function() {
        var stageResources = [
            {path: 'img/playerSprite/player00.png', type: TYPE_IMAGE},
            {path: 'img/stageSprite/stage1Back.jpg', type: TYPE_IMAGE},
            {path: 'img/menuBack.jpg', type: TYPE_IMAGE},
            {path: 'img/front/front.png', type: TYPE_IMAGE}
        ];
        GameApp.loader.loadResources(stageResources);
        GameApp.loader.clearCallbacks();
        GameApp.loader.onReady(init);
    }
    
    function init() {
        drawBackground();

        var menu = new Menu();
        menu.init();

        var game = new Game();
        game.init({
            background: GameApp.loader.get('img/stageSprite/stage1Back.jpg')
        });
//        context.createPattern(loader.get('img/stg1bg.png'), 'repeat');
//        reset();
//        lastTime = Date.now();
//        isRunning = true;
//        main();
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

    function drawBackground() {
        backgroundCanvas = document.createElement("canvas");
        var context = backgroundCanvas.getContext("2d");
        backgroundCanvas.width = 800;
        backgroundCanvas.height = 600;
        backgroundCanvas.style.position = "absolute";
        backgroundCanvas.style.zIndex = 0;
        backgroundCanvas.style.left = 0;
        backgroundCanvas.style.top = 0;
        document.body.appendChild(backgroundCanvas);

        var pattern = context.createPattern(GameApp.loader.get('img/menuBack.jpg'), "repeat");
        context.fillStyle = pattern;
        context.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

        var menuSprite = GameApp.loader.get('img/front/front.png');
        context.drawImage(menuSprite, 128, 0, 128, 256, 657, 329, 128, 256); //logo
        context.drawImage(menuSprite, 0, 0, 128, 80, 593, 457, 128, 80); //title
        context.drawImage(menuSprite, 0, 80, 64, 16, 542, 30, 64, 16); //HiScore
        context.drawImage(menuSprite, 0, 96, 64, 16, 542, 46, 64, 16); //Score
        
    }
}