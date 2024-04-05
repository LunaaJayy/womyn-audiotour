const startknop = document.querySelector("button");

let startscherm = document.querySelector(".startscherm");
let dagscherm = document.querySelector(".dag");
let fotoArray = [
    "images/test.png",
    "images/test2.jpg"
];

function starten () {
    startscherm.classList.add("hidden");
    dagscherm.classList.remove("hidden");
}

startknop.addEventListener('click', starten)

