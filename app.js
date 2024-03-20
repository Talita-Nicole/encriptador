let chaves = ([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
]);

ocultar('aviso');
ocultar('botao_copiar');
function exibirTexto(tag, txt){
    let campo = document.querySelector(tag);
    campo.innerHTML = txt;
}

function getTxt(){
    let caixaTexto = document.getElementById('texto');
    return caixaTexto.value;
}

function criptografar(){
    let resposta = modificacarTxt(0, 1);
    exibirResultado(resposta);
}

function descriptografar(){
    let resposta = modificacarTxt(1, 0);

    exibirResultado(resposta);   
}

function exibirResultado(resposta){
    if(resposta == undefined){
        ocultar('botao_copiar');
        mostrar('aviso');
        mostrar('imagem_texto');
        ocultar('resultado');
    }
    else{
        botaoCopiar.innerHTML = 'Copiar';
        mostrar('botao_copiar');
        ocultar('imagem_texto');
        mostrar('resultado');
        exibirTexto('span', resposta); 
    }
}

function ocultar(id){
    return document.getElementById(id).style.visibility = "hidden";
}

function mostrar(id){
    return document.getElementById(id).style.visibility = "visible";
}

function modificacarTxt(valor, alterar ){
    let texto = getTxt();
    if(verificar(texto)){
        for(let i = 0; i<chaves.length; i++){
            if(texto.includes(chaves[i][valor])){
                texto = texto.replaceAll(chaves[i][valor], chaves[i][alterar]);
            }
        } 
        return texto;
    }
    else{
        return undefined;
    }
}

function verificar(txt){
    const regex = /^[a-z0-9 ]+$/;
    
    if (regex.test(txt)) {
        ocultar('aviso');
        return true;
    } else {
        return false;
    }
}


const textoCopiar = document.querySelector('span');
const botaoCopiar = document.getElementById('botao_copiar');

botaoCopiar.addEventListener('click', (evt) =>{
    navigator.clipboard.writeText(textoCopiar.innerHTML);
    botaoCopiar.innerHTML = 'Copiado';
})