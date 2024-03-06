let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

let day = document.getElementById("day")
let dayNumber = document.getElementById("dayNumber")
let month = document.getElementById("month")
let year = document.getElementById("year")

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
setInterval(() =>{
    let currentTime = new Date();

    day.innerHTML = days[currentTime.getDay()];
    month.innerHTML = `${months[currentTime.getMonth()]},`;
    let dayNumberText = currentTime.getDate();
    dayNumber.innerHTML = `${dayNumberText},`;
    year.innerHTML = `${currentTime.getFullYear()}`;
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000)