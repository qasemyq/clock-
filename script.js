function showTime() {
  const date = new Date(); // ba in minunts va seconds ro bedast miyaram
  const h = date.getHours(); // in method return mikone 0 ta 23 ro
  const m = date.getMinutes(); // in method return mikone 0 ta 59 ro
  const s = date.getSeconds(); // in method return mikone 0 ta 59 ro also

  const time = h + " : " + m + " : " + s;
  document.getElementById("myClockDisplay").innerText = time; //innerText to firefox support nemishe. mitunam fagat az innerHTML estefade konam
  document.getElementById("myClockDisplay").textContent = time; //textContent ham tu IE support nemishe, bara hamin in 2ta line ro neveshtim
}

showTime();
// age function showTime ro fagt seda konam saat neshun dade mishe vali harakat nemikone bara hamin az setInterval() estefade mikonam
setInterval(showTime, 1000); //setInterval method karesh inke function showTime ro har 1 saniye function ro seda mikone ke mitunam taggiy bedam 1 saniye ro

// alan moshkel ine ke 1 saniye tul mikeshe ta saat neshun dade beshe vagti varede safhe misham bara hamin fata kafiye function showTime() ro bezaram balaye setInterval(showTime, 1000)
