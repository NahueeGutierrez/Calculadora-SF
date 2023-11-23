let displayValue = "";

function primerMuestra(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function borrar() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function total() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
var botones = document.querySelectorAll(".fondoBoton");
var audio = document.getElementById("miAudio");
botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        audio.play();
    });
});
var botonesBorrar = document.querySelectorAll(".fondoBotonBorrar");
var audioBorrar = document.getElementById("miAudioBorrar");
botonesBorrar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        audioBorrar.play();
    });
});
var botonesResultado = document.querySelectorAll(".fondoBotonResultado");
var audioResultado = document.getElementById("miAudioResultado");
botonesResultado.forEach(function(boton) {
    boton.addEventListener("click", function() {
        audioResultado.play();
    });
});
var musica = document.getElementById("musica");
var botonReproducir = document.getElementById("play");
var botonPausar = document.getElementById("pausa");
botonReproducir.addEventListener("click", function() {
    musica.play();
});
botonPausar.addEventListener("click", function() {
    musica.pause(); 
});
