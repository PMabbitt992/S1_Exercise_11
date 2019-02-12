"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Paige Mabbitt
   Date: 2.5.19
   

*/

// window.alert("Welcome to Tulsa"); 0

//Run the clock 
runClock();
setInterval("runClock()", 1000);
//Actual clock function
function runClock() {
    //Store current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    //Display current date and time
    document.getElementById("dateNow").innerHTML =
        dateStr + " <br/> " + timeStr;
    //Calculate the days till the New Year
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    //Display time left until New Years
    document.getElementById("days").textContent = Math.floor(daysLeft);
    //Calculate hours left in the current day
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    //Calculate the minutes and seconds left
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}