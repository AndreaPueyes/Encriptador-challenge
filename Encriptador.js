const campo_texto = document.querySelector(".campo-texto");
const mensaje = document.querySelector("#campo-mensaje");
const sin_texto = document.querySelector(".sinTexto");
const copiar = document.querySelector(".btnCopiar");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function botonEncriptar(){
    ocultarTexto();
    const texto = encriptar(campo_texto.value);
    mensaje.value = texto
    campo_texto.value = ""; 
    mensaje.style.backgroundImage= "none";
};

function encriptar(fraseEncriptada){
        for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
            }
    }
    return fraseEncriptada ;        
};

function botonDesencriptar(){
    ocultarTexto();
    const texto = desencriptar(campo_texto.value);
    mensaje.value = texto;
    campo_texto.value = ""; 
    mensaje.style.backgroundImage= "none";
};

function desencriptar(fraseEncriptada){
        for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );}
        }
        
    return fraseEncriptada ;
};

function ocultarTexto (){
    sin_texto.classList.add("ocultar");
};