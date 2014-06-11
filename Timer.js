function Timer() {
    var startTime;
    
    this.initialize = function() {
        startTime = new Date().getTime();
    }
    this.getTickCount = function() {
        var curTime = new Date().getTime();
        return curTime - startTime;
    }
}