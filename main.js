video='';
status1='';

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
   canvas = createCanvas(600, 400);
   canvas.center();
}

function draw(){
    image(video, 0, 0, canvas.width, canvas.height)
}

function start(){
    objectDetector1=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log('The model has been loaded');
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}