var TYPE_SCRIPT = 1;
var TYPE_IMAGE = 2;

var loaderScript = document.createElement("script");
loaderScript.src = "Loader.js";
//Loading every needed script file. Basically this is require section.
loaderScript.onload = function() {
	var loader = new Loader();
	var requiredScripts = [
		{path : 'GameApp.js', type : TYPE_SCRIPT},
		{path : 'Game.js', type : TYPE_SCRIPT},
		{path : 'Menu.js', type : TYPE_SCRIPT}
	];
	loader.loadResources(requiredScripts);
	loader.onReady(function() {
		GameApp.loader = loader;
		var gameApp = new GameApp();
		gameApp.run();
	})
}
document.head.appendChild(loaderScript);


