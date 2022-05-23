const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".botao-copiar");
const msgAbaixoBoneco = document.querySelector(".msg-abaixo-boneco");

inputTexto.focus();

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if(textoEncriptado == "") {
        inputTexto.placeholder = "Você precisa digitar algo para criptografar"

        return textoEncriptado;
    }
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
    copiar.style.display = "block"
    msgAbaixoBoneco.style.display = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = dencriptar(inputTexto.value)
    if(textoDesencriptado == "") {
        inputTexto.placeholder = "Você precisa digitar algo para descriptografar"

        return textoDesencriptado;
    }
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none"
    copiar.style.display = "block"
    msgAbaixoBoneco.style.display = "none"
}

function dencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiar() {
    if(mensagem.value == "") {
        mensagem.style.backgroundImage = "none"
    } else {
        navigator.clipboard.writeText(mensagem.value);
    }
}

function checar_carater(e) {
    const carater = String.fromCharCode(e.keyCode)
    const carater_aceitaveis = "[a-z,0-9]"

    if ((carater.match(carater_aceitaveis) || (e.keyCode == 13) || (e.keyCode == 32))) {  // Com exceção de enter e espaço respectivamente. 
        return true
    } else {
        return false
    }
}

inputTexto.addEventListener("keypress", function(e){
    if(!checar_carater(e) || e.key === ","){    
        e.preventDefault()     
    }
});

function resetMensagem () {
    mensagem.style.backgroundImage = "url('./resultado.png')"
//     imagens/resultado.png
//     mensagem.style.backgroundImage = "https://github.com/FelipeeCarneiro/decodificador-de-textos/blob/2537d58da1560861979ffda5f4787f7dc7f9eaf3/imagens/resultado.png"
    mensagem.placeholder = ''
}

function limpar () {
     instrucoes.style.display = "none";
}