function play() { 
  var beepsound = new Audio( 
'https://www.soundjay.com/button/sounds/beep-01a.mp3'); 
  beepsound.play(); 
} 


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function toSeconds( x ) {
  var split = x.split(':');
  var rtrn = (+split[0]) * 60 * 60 + (+split[1]) * 60;
  return rtrn;
}

function startTimer() {
  bruteUserInput = document.getElementById('userTime').value;
  userInput = toSeconds(bruteUserInput);
  console.log(userInput)
  	if(userInput.length == 0){
		alert("Please enter a value");
	} else {

  function display( notifier, str ) {
    document.getElementById(notifier).innerHTML = str;
  }
  

  function toMinuteAndSecond( x ) {
    var hrs = ~~(x / 3600);
    var mins = ~~((x % 3600) / 60);
    var secs = ~~x % 60;
    
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  function snackbardisplay( text ) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    play();
  }
        
  function setTimer( remain, actions ) {
    (function countdown() {
       display("countdown", toMinuteAndSecond(remain));         
       actions[remain] && actions[remain]();
       (remain -= 1) >= 0 && setTimeout(arguments.callee, 1000);
    })();
  }

  setTimer(userInput, {
     0: function () { snackbardisplay("Time's up !");               }
  }); 
}  
}

function updateClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = (currentHours < 12) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = (currentHours == 0) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  setTimeout(updateClock, 1000);
}
updateClock();
