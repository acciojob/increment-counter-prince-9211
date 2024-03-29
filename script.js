var incrementcount=document.getElementById("incrementBtn");
var counterDisplay=document.getElementById("counter");
var count=0;
 function incrementCount() {
 	count++;
	 counterDisplay.textContent=count;
 }
//Adding eventListner
incrementBtn.addEventListener("click",incrementCount);