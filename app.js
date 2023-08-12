// Set constraints for the video stream
var constraints = { video: true, audio: false };

// Define constants
const cameraView = document.querySelector("#camera--view");

// Access the device camera and stream to cameraView
function cameraStart() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
      cameraView.srcObject = stream;
    })
    .catch(function(error) {
      console.error("Oops. Something is broken.", error);
    });
}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);
