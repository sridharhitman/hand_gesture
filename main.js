import fs from 'fs'
camera = document.getElementById("camera");
Webcam.set({
    height: 300,
    width:350,
    image_format: "png",
    png_quality: 90
})
Webcam.attach('#camera');
function takeSnapshot() {
    Webcam.snap(function(src){
        document.getElementById('result').innerHTML = "<img id='captured_image' src='"+src+"'>"
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fEz_YomuU/model.json', modelLoaded)
function modelLoaded(){
    console.log(ml5.version)
}