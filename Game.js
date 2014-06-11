function Game() {
    var STATE_LOADING = 1;
    var STATE_MENU = 2;
    var STATE_GAME = 3;
    
    var context;
    var level;
    var state;
    
    this.initialize = function(options) {
        options.level = options.level || 1;
        
        context = options.context;
        level = options.level;
        state = STATE_LOADING;
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
}