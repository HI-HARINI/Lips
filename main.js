nosex=0
nosey=0
function preload(){
clownnose=loadImage("lips-removebg-preview.png")
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
postNet=ml5.poseNet(video,modelLoaded)
postNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y+3;
    }
}
function modelLoaded(){
    console.log("postNetisinitiated")
}
function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,20,20)
}
function takesnapshot(){
    save("filter.png")
}