function encriptar(){    
    var estatus = document.getElementById("status");
    var foto = document.getElementById("imagen");
    var texto = document.getElementById("texto").value;
    var textoCifrado = texto
    
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("copiar").textContent = textoCifrado;
        foto.src = "./img/encriptar.png";
        estatus.textContent = "El texto fue ENCRIPTADO con exito";
        
    }else{
        alert("No fue posible encriptar");
        foto.src = "./img/accion.png";
        estatus.textContent = "Ingrese el texto que desea encriptar o desencriptar";
    }
}
function desencriptar(){
    var texto = document.getElementById("texto").value;
    var estatus = document.getElementById("status");
    var foto = document.getElementById("imagen");
    var textoDecifrado = texto    
        
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.length != 0){
        texto = textoDecifrado;
        document.getElementById("copiar").textContent = textoDecifrado;
        foto.src = "./img/desencriptar.png";
        estatus.textContent = "El texto fue DESENCRIPTADO con exito";
    }else{
        alert("No fue posible desincriptar");
        foto.src = "./img/accion.png";
        estatus.textContent = "Ingrese el texto que desea encriptar o desencriptar";
    }
    }
function botonCopiar(){
    var estatus = document.getElementById("status");
    var texto = document.getElementById("texto");
    var contenido = document.getElementById("copiar");
    contenido.select();
    document.execCommand("copy");
    estatus.textContent = "Texto copiado correctamente en el portapapeles";
    texto.select();
}

function borrar(){
    var foto = document.getElementById("imagen")
    var estatus = document.getElementById("status");
    var contenidoTexto = document.getElementById("texto");
    var contenidoCopiar = document.getElementById("copiar");
    contenidoTexto.select();
    document.execCommand("delete")
    contenidoCopiar.select();
    document.execCommand("delete")
    foto.src = "./img/buscar.png"
    estatus.textContent = "Ingrese el texto que desea encriptar o desencriptar";
}