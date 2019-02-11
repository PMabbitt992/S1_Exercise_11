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

// Stores current date and time
var currentDay = new Date("May 23, 2018 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

//Displays the current date and time
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
// Calculate hours left in current day
var hrsLeft = (daysLeft - Math.floor(dyasleft)) * 24;

// Displays the time left until New Years Eve
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

// Execute function and run the clock
run.Clock();

// Exectue the functionto run and display the countdown clock
function runClock() {
    // Stores current date and time

}