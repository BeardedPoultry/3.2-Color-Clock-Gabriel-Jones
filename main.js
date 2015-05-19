var timeNow;
var $timeCurrent = document.querySelector(".timeCurrent");

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
}

getTotalTime();
setInterval(getTotalTime, 1000);
var ProgressBar = $seconds;
var line = new ProgressBar.Line('#example-line-container', {
    color: '#FCB03C'

});

line.animate(1.0);