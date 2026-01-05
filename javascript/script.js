alert("Добре дошли в TechnoZone!");

let today = new Date();
let year = today.getFullYear();
let day = today.getDate();
let month = today.getMonth() + 1;

document.getElementById("year").textContent = year;
document.getElementById("date").textContent = day + "." + month + "." + year;