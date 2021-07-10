
function showTime() {
  const date = new Date(); 
  const h = date.getHours(); 
  const m = date.getMinutes(); 

  const time = h + " : " + m + " : " + s;
  document.getElementById("myClockDisplay").innerText = time; 
  document.getElementById("myClockDisplay").textContent = time; 
}

showTime();
setInterval(showTime, 1000); 
