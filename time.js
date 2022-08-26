const year = document.getElementById("year");
const month = document.getElementById("month");
const date = document.getElementById("date");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("second");
const miliseconds = document.getElementById("milisec");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval (() => {
    const doe = new Date();
    let fullYear = doe.getFullYear();
    let fullMonth = doe.getMonth();
    let fullDate = doe.getDate();
    let fullDay = doe.getDay();
    let fullHours = doe.getHours();
    let fullMinutes = doe.getMinutes();
    let fullSecs = doe.getSeconds();
    let fullMilisecs = doe.getMilliseconds();
    
    year.innerHTML = "<h2>Year</h2>"+fullYear
    month.innerHTML = "<h2>Month</h2>"+months[fullMonth]
    date.innerHTML = "<h2>Date</h2>"+fullDate
    day.innerHTML = "<h2>Days</h2>"+days[fullDay]
    hour.innerHTML = "<h2>Hours</h2>"+fullHours
    minute.innerHTML = "<h2>MInutes</h2>"+fullMinutes
    seconds.innerHTML ="<h2>Seconds</h2>"+fullSecs
    miliseconds.innerHTML = "<h2>Milliseconds</h2>"+fullMilisecs ;
    
},1)

//create a countdown timer that 
const start = document.getElementById("starttimer");

let sec = 0
let min = 0
let hr = 0
let playbtn;

var setInterval1

startbtn = (self) => {
    self.disabled=true;
    setInterval1 =setInterval(() => 
    {
        sec = sec+1
if (sec === 60) {
    sec = 0
    min = min+1
}
if (sec.toString().length===1) {
secon='0' + sec.toString()
} else {
    secon=sec
}
if (min === 60) {
    min = 0
    hr = hr+1
    sec = 0
}
if (min.toString().length===1) {
semin='0' + min.toString()
} else {
    semin=min
}

        start.innerHTML =hr+":"+semin+":"+secon
    }, 1000)
}


stopbtn = (self) => {
  if (self.innerHTML === 'Stop'){
      self.innerHTML = 'continue'
      clearInterval(setInterval1)
  } else {
      self.innerHTML = 'Stop'
      setInterval1 =setInterval(() => {
        sec = sec+1
if (sec === 60) {
    sec = 0
    min = min+1
}
if (sec.toString().length===1) {
secon='0' + sec.toString()
} else {
    secon=sec
}
if (min === 60) {
    min = 0
    hr = hr+1
    sec = 0
}
if (min.toString().length===1) {
semin='0' + min.toString()
} else {
    semin=min
}

        start.innerHTML =hr+":"+semin+":"+secon
    }, 1000)
  }
}



resetbtn = () => {
clearInterval(setInterval1);
    hr = 0;
    min=0;
    sec = 0;

    start.innerHTML ="0:00:00"
}