var mode = 0;
var hour, min, sec;
var year, month, day, week;
var twoDigit, weeks, now;

function setClock(){
  twoDigit = function (a) {
    var futaketa
    if (a < 10) { futaketa = "0" + a; }
    else { futaketa = a; }
    return futaketa;
  }
  // 曜日配列
  weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");

  // 現在日時
  now = new Date();
  year = now.getFullYear();
  month = twoDigit(now.getMonth() + 1);
  day = twoDigit(now.getDate());
  week = weeks[now.getDay()];
  hour = twoDigit(now.getHours());
  if (hour >= 24) { hour = 0; }
  min = twoDigit(now.getMinutes());
  sec = twoDigit(now.getSeconds());
  if(mode == 0){
    document.getElementById("time").textContent = hour + ":" + min + ":" + sec;
  }else{
    if (hour >= 12) {
      document.getElementById("time").textContent = "PM" + (hour - 12) + ":" + min + ":" + sec;
    } else if (hour < 12) {
      document.getElementById("time").textContent = "AM" + (hour) + ":" + min + ":" + sec;
    }
  }
}

window.onload = function clock() {

  twoDigit = function (a) {
    var futaketa
    if (a < 10) { futaketa = "0" + a; }
    else { futaketa = a; }
    return futaketa;
  }
  // 曜日配列
  weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");


  // 現在日時
  now = new Date();
  year = now.getFullYear();
  month = twoDigit(now.getMonth() + 1);
  day = twoDigit(now.getDate());
  week = weeks[now.getDay()];
  hour = twoDigit(now.getHours());
  if(hour >= 24) { hour = 0; }
  min = twoDigit(now.getMinutes());
  sec = twoDigit(now.getSeconds());
  
  document.getElementById("time").textContent = hour + ":" + min + ":" + sec;
  setInterval(setClock, 1000);
  
  //　AMPM切り替え
  document.getElementById("button").onclick = function () {
    if (mode == 0) {
      mode = 1;
    }else{
      mode = 0;
    }
    console.log(mode);
  }
  //　日付HTML書き換え
  document.getElementById("date").textContent = year + "/" + month + "/" + day + " (" + week + ")";
  //clockを1000ミリ秒実行
  //setInterval(clock, 1000);

}

