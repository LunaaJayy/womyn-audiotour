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
    "images/test.png", "dagen/dag1.png", "dagen/dag2.png", "dagen/dag3.png", "dagen/dag4.png", "dagen/dag5.png", "dagen/dag6.png", 
    "images/test.png", "dagen/dag7.png", "dagen/dag8.png", "dagen/dag9.png", "dagen/dag10.png", "dagen/dag11.png", "dagen/dag12.png", 
    "images/test.png", "dagen/dag13.png", "dagen/dag14.png", "dagen/dag15.png", "dagen/dag16.png", "dagen/dag17.png", "dagen/dag18.png", 
    "dagen/dag19.png", "dagen/dag20.png", "images/test.png", "dagen/dag21.png", "dagen/dag22.png", "dagen/dag23.png", "dagen/dag24.png",
    "dagen/dag25.png", "dagen/dag26.png", "dagen/dag27.png", "dagen/dag28.png"
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


