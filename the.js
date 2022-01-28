const diasEL = document.getElementById("dias");
const horasEL = document.getElementById("horas");
const minuntosEL = document.getElementById("minuntos");
const seguntosEL = document.getElementById("seguntos");

const newYears = "1 jan 2023";

function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate =  new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const dias = Math.floor(totalSeconds / 3600 / 24);
    const horas = Math.floor(totalSeconds / 3600) % 24;
    const minuntos = Math.floor(totalSeconds / 60) % 60;
    const seguntos = Math.floor(totalSeconds) % 60;


    daysEL.innerHTML = days;
    horasEL.innerHTML = formatTime(horas);
    minuntosEL.innerHTML = formatTime(minuntos);
    seguntosEL.innerHTML = formatTime(seguntos);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();

setInterval(countdown,1000);