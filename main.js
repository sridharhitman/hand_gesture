prediction = "";
camera = document.getElementById("camera");
Webcam.set({
    height: 300,
    width:350,
    image_format: "png",
    png_quality: 90
})
Webcam.attach('#camera');
function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='captured_image' src='"+data_uri+"'>"
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fEz_YomuU/model.json', modelLoaded)
function modelLoaded(){
    console.log(ml5.version)
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults)
}
function gotResults(error, results){
      if(error){
          console.error(error)
      } else if(results){
          console.log(results);
          document.getElementById('result-emotion-name').innerHTML = results[0].label;
          prediction = results[0].label;
          if(results[0].label == 'thumbs up'){
              document.getElementById('update-emoji').innerHTML = "&#128077;";
          }
          if(results[0].label == 'thumbs down'){
              document.getElementById('update-emoji').innerHTML = "&#128078;";
          }
          if(results[0].label == 'hi'){
              document.getElementById('update-emoji').innerHTML = "&#128075;";
          }
          speak();
      }
}
function speak(){
    var synth = window.speechSynthesis;
    speakData = "The Prediction is" + prediction;
    var speakThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
    synth.speak(speakThis)
}