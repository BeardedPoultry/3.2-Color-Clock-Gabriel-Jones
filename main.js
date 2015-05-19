var timeNow;
var display = [];  
function getTotalTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  console.log(hours, minutes, seconds);
  
//  $hours = Date.prototype.getHours('.hours');
//  $minutes = Date.prototype.getMinutes('.minutes');
//  seconds = Date.prototype.getSeconds('.seconds');
}
getTotalTime();
