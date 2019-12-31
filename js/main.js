const $clockDisplay = document.querySelector("#clock-display");




function renderClock($clockDisplay, time) {

    $clockDisplay.innerText = time;
}

function runClock() {
    setInterval((secondsDisplayed) => {
        renderClock(secondsDisplayed--);
    }, 1000);
}

function formatAsTimer(totalSeconds) {
    let minutes = (Math.floor(totalSeconds / 60)).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}
