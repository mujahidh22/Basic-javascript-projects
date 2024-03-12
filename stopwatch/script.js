let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

let timerDisplay = document.querySelector(".timer-display")
let startbtn=document.getElementById("start-timer");
let pausebtn=document.getElementById("pause-timer");
let resetbtn=document.getElementById("reset-timer");



let timerId=null;



startbtn.addEventListener("click",() =>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(displayTimer,10)
});

pausebtn.addEventListener("click", () => {
    clearInterval(timerId);
});

resetbtn.addEventListener("click",() =>{
    clearInterval(timerId);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerDisplay.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer(){
    milliseconds++;
    if(milliseconds == 1000)
    {
        milliseconds=0;
        seconds++;
        if(seconds == 60)
        {
            seconds=0;
            minutes++;
            if(minutes == 60)
            {
                minutes=0;
                hours++;
            }
        }
    }

    let h  = hours < 10 ? "0" + hours : hours;
    let m  = minutes < 10 ? "0" + minutes : minutes;
    let s  = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}