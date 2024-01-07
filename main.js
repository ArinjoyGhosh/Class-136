status = "";
function preload() {
    vdo = createVideo("video.mp4");
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    vdo.hide();
}
function startDetection() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    vdo.loop();
    vdo.volume(0);
    vdo.speed(1);
}
function draw() {
    image(vdo, 400, 400, 0, 0);
}