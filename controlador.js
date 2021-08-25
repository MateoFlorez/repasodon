let boton1=document.getElementById("botonnext");
let boton2=document.getElementById("botonback");
let foto1=document.getElementById("21savage1");
let titulo1=document.getElementById("titulo1");
let audio1=document.getElementById("audio1");

let foto2=document.getElementById("21savage2");
let titulo2=document.getElementById("titulo2");
let audio2=document.getElementById("audio2");

let foto3=document.getElementById("21savage3");
let titulo3=document.getElementById("titulo3");
let audio3=document.getElementById("audio3");

let foto4=document.getElementById("21savage4");
let titulo4=document.getElementById("titulo4");
let audio4=document.getElementById("audio4");

let foto5=document.getElementById("21savage5");
let titulo5=document.getElementById("titulo5");
let audio5=document.getElementById("audio5");

let foto6=document.getElementById("21savage6");
let titulo6=document.getElementById("titulo6");
let audio6=document.getElementById("audio6");

boton1.addEventListener("click",perroGuardian);

function perroGuardian() {
    titulo1.textContent="BrandNewDraco";
    foto1.src="img/21savage2.jpg";
    audio1.src="audio/BrandNewDraco.mp3";

    titulo2.textContent="Real Nigga";
    foto2.src="img/21savage1.jpg";
    audio2.src="audio/RealNigga.mp3";

    titulo3.textContent="X";
    foto3.src="img/21savage5.jpg";
    audio3.src="audio/X.mp3";

    titulo4.textContent="RichNiggaShit";
    foto4.src="img/21savage3.jpg";
    audio4.src="audio/RichNiggaShit.mp3";

    titulo5.textContent="A Lot";
    foto5.src="img/21savage4.jpg";
    audio5.src="audio/ALot.mp3";

    titulo6.textContent="SnitchesAndRats";
    foto6.src="img/21savage2.jpg";
    audio6.src="audio/SnitchesAndRats.mp3";
}

boton2.addEventListener("click",perroGuardian2);

function perroGuardian2() {
    window.location.reload();
}


