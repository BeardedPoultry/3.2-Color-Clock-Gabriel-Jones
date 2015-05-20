var timeNow;
var $timeCurrent = document.querySelector(".timeCurrent");
var hexColor; 
function getTotalTime() {
  
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  hours = (hours < 10 ? "0" : '') + hours;
  minutes = (minutes < 10 ? "0" : '') + minutes;
  seconds = (seconds < 10 ? "0" : '') + seconds;

  $timeCurrent.textContent = hours + " : " + minutes + " : " + seconds;
  
  console.log(hours, minutes, seconds);
  
  hexColor = ("#"+hours+minutes+seconds);
  document.body.style.background=hexColor;
}
function changingLine() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var percentLine = (seconds/60)*100;
  var widthLine = percentLine + "%";
  $line.style.width = widthLine;
}

getTotalTime();
setInterval(getTotalTime, 1000);
var ProgressBar = $seconds;
var line = new ProgressBar.Line('#example-line-container', {
    color: '#FCB03C'

});