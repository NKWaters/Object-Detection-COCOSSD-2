function back() {
    window.location = "index.html";
}

function setup() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status-button").innerHTML = "Status - Detecting Objects....";
}

status = "";

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}