const time = document.querySelector(".time");

let clock = new Date();
let hours = clock.getHours();
let minutes = clock.getMinutes();

time.innerHTML = `${hours}:${minutes}`;
