const startknop = document.querySelector("button");
const titel = document.querySelector("p");
const foto = document.querySelector(".defotos");
const pijlLinks = document.querySelector(".pijl-links");
const pijlRechts = document.querySelector(".pijl-rechts");
const audioElement = new Audio();
const afspeelButton = document.querySelector(".playbutton")

let startscherm = document.querySelector(".startscherm");
let dagscherm = document.querySelector(".dag");
let fotoArray = [
    "images/test.png",
    "images/test2.jpg"
];
let titelArray = [
    "Winter", "Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6", 
    "Lente", "Dag 7", "Dag 8", "Dag 9", "Dag 10", "Dag 11", "Dag 12", 
    "Zomer", "Dag 13", "Dag 14", "Dag 15", "Dag 16", "Dag 17", "Dag 18", 
    "Dag 19", "Dag 20", "Herfst", "Dag 21", "Dag 22", "Dag 23", "Dag 24",
    "Dag 25", "Dag 26", "Dag 27", "Dag 28"
];

let audioArray = [
    "audio/test.mp3", "audio/test2.mp3"
];

let huidigeIndex = 0


function starten () {
    startscherm.classList.add("hidden");
    dagscherm.classList.remove("hidden");
    toonFotoEnTitel();
}

function toonFotoEnTitel() {
    const fotoSRC = fotoArray[huidigeIndex];
    const dagTitel = titelArray[huidigeIndex];
    const audioSRC = audioArray[huidigeIndex];

    foto.src = fotoSRC;
    titel.textContent = dagTitel;
    audioElement.src = audioSRC;
}


function naarLinks() {
    if (huidigeIndex > 0) {
        huidigeIndex--;
        toonFotoEnTitel();
    }
}


function naarRechts() {
    if (huidigeIndex < fotoArray.length - 1){
        huidigeIndex++;
        toonFotoEnTitel();
    }
}

function speelAudio() {
    audioElement.play()
}



startknop.addEventListener('click', starten)
pijlLinks.addEventListener('click', naarLinks)
pijlRechts.addEventListener('click', naarRechts)
afspeelButton.addEventListener('click', speelAudio)


