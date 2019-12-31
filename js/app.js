$(document).foundation()



const $clockDisplay = document.querySelector("#clock-display");

let intervalID;




function renderClock(time) {
    let $clockDisplay = document.querySelector("#clock-display");
    $clockDisplay.innerText = formatAsTimer(time);
}

function runClock(initialSeconds) {
    intervalID = setInterval(() => {
        renderClock(initialSeconds--);
        
    }, 1000);
}



function formatAsTimer(totalSeconds) {
    let minutes = (Math.floor(totalSeconds / 60)).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}