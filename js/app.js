$(document).foundation()




let intervalID;

let TIME_BLOCK = 25*60;
let SHORT_BREAK = 5*60;
let LONG_BREAK = 10*60;

const $clockDisplay = document.querySelector("#clock-display");
const $timeBlockButton = document.querySelector("#time-block-button");
const $shortBreakButton = document.querySelector("#short-break-button");
const $longBreakButton = document.querySelector("#long-break-button");
const $runClockButton = document.querySelector("#run-clock-button");
const $stopClockButton = document.querySelector("#stop-clock-button");

$timeBlockButton.onclick = renderTimeBlock;
$shortBreakButton.onclick = renderShortBreak;
$longBreakButton.onclick = renderLongBreak;
$runClockButton.onclick = runClock;
$stopClockButton.onclick = stopClock;




function renderTimeBlock(){
    stopClock();
    renderClock(TIME_BLOCK);
}

function renderLongBreak(){
    stopClock();
    renderClock(LONG_BREAK);
}

function renderShortBreak(){
    stopClock();
    renderClock(SHORT_BREAK);
}

function renderClock(time) {
    $clockDisplay.innerText = formatAsTimer(time);
}


function runClock(){
    disableButton($runClockButton);
    enableButton($stopClockButton);
    let seconds = formatTimerAsSeconds($clockDisplay.innerText);
    intervalID = setInterval(() => {
        renderClock(--seconds);
        if (seconds === 0) {
            handleZeroSeconds();            
        }
    }, 1000);
}

function stopClock(){
    disableButton($stopClockButton);
    enableButton($runClockButton);
    clearInterval(intervalID);
    return formatTimerAsSeconds($clockDisplay.innerText);
}

function handleZeroSeconds(){
    stopClock();
    sendAlert();
}

function sendAlert(){
    
}




function disableButton($button){
    $button.classList.add("disabled");
}

function enableButton($button){
    $button.classList.remove("disabled");
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






function name(params) {
    
}



function name(params) {

}