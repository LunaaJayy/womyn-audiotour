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
    "images/vierkant.png", "images/test.png", "dagen/dag1.png", "dagen/dag2.png", "dagen/dag3.png", "dagen/dag4.png", "dagen/dag5.png", "dagen/dag6.png", 
    "dagen/lente.png", "dagen/dag7.png", "dagen/dag8.png", "dagen/dag9.png", "dagen/dag10.png", "dagen/dag11.png", "dagen/dag12.png", 
    "dagen/zomer.png", "dagen/dag13.png", "dagen/dag14.png", "dagen/dag15.png", "dagen/dag16.png", "dagen/dag17.png", "dagen/dag18.png", 
    "dagen/dag19.png", "dagen/dag20.png", "images/test.png", "dagen/dag21.png", "dagen/dag22.png", "dagen/dag23.png", "dagen/dag24.png",
    "dagen/dag25.png", "dagen/dag26.png", "dagen/dag27.png", "dagen/dag28.png", "images/vierkant.png"
];
let titelArray = [
    "Welkom", "Winter", "Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6", 
    "Lente", "Dag 7", "Dag 8", "Dag 9", "Dag 10", "Dag 11", "Dag 12", 
    "Zomer", "Dag 13", "Dag 14", "Dag 15", "Dag 16", "Dag 17", "Dag 18", 
    "Dag 19", "Dag 20", "Herfst", "Dag 21", "Dag 22", "Dag 23", "Dag 24",
    "Dag 25", "Dag 26", "Dag 27", "Dag 28", "Outro"
];

let audioArray = [
    "audio/audiointro.mp3", "audio/audiowinter.mp3", "audio/audiodag1.mp3", "audio/audiodag2.mp3", "audio/audiodag3.mp3", "audio/audiodag4.mp3", "audio/audiodag5.mp3", "audio/audiodag6.mp3", 
    "audio/audiolente.mp3", "audio/audiodag7.mp3", "audio/audiodag8.mp3", "audio/audiodag9.mp3", "audio/audiodag10.mp3", "audio/audiodag11.mp3", "audio/audiodag12.mp3", 
    "audio/audiozomer.mp3", "audio/audiodag13.mp3", "audio/audiodag14.mp3", "audio/audiodag15.mp3", "audio/audiodag16.mp3", "audio/audiodag17.mp3", "audio/audiodag18.mp3", 
    "audio/audiodag19.mp3", "audio/audiodag20.mp3", "audio/audioherfst.mp3", "audio/audiodag21.mp3", "audio/audiodag22.mp3", "audio/audiodag23.mp3", "audio/audiodag24.mp3", 
    "audio/audiodag25.mp3", "audio/audiodag26.mp3", "audio/audiodag27.mp3", "audio/audiodag28.mp3", "audio/audiooutro.mp3"
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
    afspeelButton.src = "images/playbutton.png"

    if ( dagTitel === "Welkom") {
        pijlLinks.src = "images/pijl-wit.png"
        console.log("ghello?")
    }
    else if (dagTitel === "Outro") {
        pijlRechts.src = "images/pijl-wit.png"
    } 
    else {
        pijlLinks.src = "images/pijltje-links.png"
        pijlRechts.src = "images/pijltje-rechts.png"
    }
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
    if(audioElement.paused){
        audioElement.play();
        afspeelButton.src = "images/pausebutton.png"
      } else {
        audioElement.pause();
        afspeelButton.src = "images/playbutton.png"
      }
}


startknop.addEventListener('click', starten)
pijlLinks.addEventListener('click', naarLinks)
pijlRechts.addEventListener('click', naarRechts)
afspeelButton.addEventListener('click', speelAudio)
audioElement.addEventListener('ended', function() {
    afspeelButton.src = "images/playbutton.png";
});


