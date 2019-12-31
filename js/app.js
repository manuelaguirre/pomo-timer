$(document).foundation()



const $clockDisplay = document.querySelector("#clock-display");

let intervalID;




function renderClock(time) {
    let $clockDisplay = document.querySelector("#clock-display");
    $clockDisplay.innerText = formatAsTimer(time);
}

function runClock() {
    let $clockDisplay = document.querySelector("#clock-display");
    let seconds = formatTimerAsSeconds($clockDisplay.innerText);
    intervalID = setInterval(() => {
        renderClock(--seconds);
    }, 1000);
}

function formatAsTimer(totalSeconds) {
    let minutes = (Math.floor(totalSeconds / 60)).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function formatTimerAsSeconds($timer) {
    let minutes = parseInt($timer[0] + $timer[1], 10);
    let seconds = parseInt($timer[3] + $timer[4], 10);
    seconds = minutes * 60 + seconds;
    return seconds;
}

function stopClock() {
    //I want it to return the stopping time in total seconds
    clearInterval(intervalID);
    let $clockDisplay = document.querySelector("#clock-display");
    return formatTimerAsSeconds($clockDisplay.innerText);
}

function setTimeBlock(seconds) {
    let $clockDisplay = document.querySelector("#clock-display");
    $clockDisplay.innerText = formatAsTimer(seconds);
}

function name(params) {
    
}



function name(params) {

}