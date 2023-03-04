var blueImages = [];
var whiteImages = [];

for (var i = 1; i <= 50; i++) {
  blueImages.push({
    src: "img/Blue/BL (" + i + ").png",
    speed: Math.random() * (120 - 80) + 80 // kecepatan antara 80 dan 120 ms
  });
}

for (var i = 1; i <= 121; i++) {
  whiteImages.push({
    src: "img/White/WH (" + i + ").png",
    speed: Math.random() * (150 - 100) + 100 // kecepatan antara 100 dan 150 ms
  });
}


var blueIndex = 0;
var whiteIndex = 0;
var isPaused = false;

function rotateImages() {
  if (!isPaused) {
    document.querySelector("#blue-image").setAttribute("src", blueImages[blueIndex].src);
    blueIndex = (blueIndex + 1) % blueImages.length;
    
    document.querySelector("#white-image").setAttribute("src", whiteImages[whiteIndex].src);
    whiteIndex = (whiteIndex + 1) % whiteImages.length;
  }
  
  setTimeout(rotateImages, Math.max(blueImages[blueIndex].speed, whiteImages[whiteIndex].speed));
}

rotateImages();

document.querySelector("#pause-button").addEventListener("click", function() {
  isPaused = !isPaused;
  
  if (isPaused) {
    var randomBlueIndex = Math.floor(Math.random() * blueImages.length);
    document.querySelector("#blue-image").setAttribute("src", blueImages[randomBlueIndex].src);
    
    var randomWhiteIndex = Math.floor(Math.random() * whiteImages.length);
    document.querySelector("#white-image").setAttribute("src", whiteImages[randomWhiteIndex].src);
  }
});
