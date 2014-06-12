function Loader() {
    var resourceCache = {};
    var callbacks = [];
    
    this.loadResources = function(listOfResources) {
        for (var i = 0; i < listOfResources.length; i++) {
            load(listOfResources[i]);
        }
    }
    this.onReady = function(newCallback) {
        callbacks.push(newCallback);
    }
    this.clearCallbacks = function() {
        callbacks = [];
    }
    this.get = function(url) {
        return resourceCache[url];
    }
    //
    this.dump = function() {
        console.log(resourceCache);
    }
    //
    function load(resourceOptions) {
        if (resourceCache[resourceOptions.path]) {
            return resourceCahche[resourceOptions.path];
        }
        switch (resourceOptions.type) {
            case TYPE_SCRIPT:
                var resourceObject = document.createElement('script');
            break;
            case TYPE_IMAGE:
                var resourceObject = new Image();
            break;
            default:
                throw 'Unknown resource type in Loader.load()';
            break;
        }
        resourceObject.onload = function() {
            resourceCache[resourceOptions.path] = resourceObject;
            
            if (isReady()) {
                callbacks.forEach(function(func) { func(); });
            }
        }
        resourceCache[resourceOptions.path] = false;
        resourceObject.src = resourceOptions.path;
        if (resourceOptions.type == TYPE_SCRIPT) {
            document.head.appendChild(resourceObject);
        }
    }
    function isReady() {
        var ready = true;
        for(var url in resourceCache) {
            if(resourceCache.hasOwnProperty(url) &&
               !resourceCache[url]) {
                ready = false;
            }
        }
        return ready;
    }
}