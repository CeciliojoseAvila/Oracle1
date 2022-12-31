
function encriptar(){
    var texto = document.getElementById("inputTexto").ariaValueMax.toLowerCase();

    var textCifrado = texto.replace(/e/img,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"ines");
    var textCifrado = textCifrado.replace(/a/igm,"ufat");

    document.getElementById("imgDer").style.display = none;
    document.getElementById("texto").style.display = none;
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";    
    document.getElementById("copiar").style.display = "inherit";
}

