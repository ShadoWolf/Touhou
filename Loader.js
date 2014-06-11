function Loader() {
    var resourceCache = {};
    var callbacks = [];
    var numOfImages = 0;
    var imagesLoaded = 0;
    
    this.loadResourses = function(listOfImages) {
        numOfImages += listOfImages.length;
        for (imagePath in listOfImages) {
            load(imagePath);
        }
    }
    this.onReady(newCallback) {
        callbacks.push(newCallback);
    }
    this.get(url) {
        return resourceCache[url];
    }
    this.isReady() {
        return (imagesLoaded == numOfImages);
    }
    
    function load(url, numOfImages) {
        if (resourceCache[url]) {
            return resourceCahche[url];
        }
        
        var image = new Image();
        var imagesLoaded = 0;
        image.onload = function() {
            resourceCache[url] = image;
            imagesLoaded++;
            
            if (imagesLoaded == numOfImages) {
                while (!callbacks.isEmpty()) {
                    var callback = callbacks.pop();
                    callback();
                }
            } else if (imagesLoaded > numOfImages) {
                throw new Exception('Function Loader.load() failed us');
            }
        }
        resourceCahche[url] = false;
        image.src = url;
    }
}