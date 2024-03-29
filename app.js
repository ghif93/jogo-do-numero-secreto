/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

document.querySelector('p').innerHTML = 'escolha um número entre 1 e 10'; */
let listaDeNumerosSorteados = [];
let limite = 100;
function exibirTextoNaTela(tag,texto){
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

exibirMensagemInicial();


let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);


    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas>1?'tentativas':'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        limparCampo();
        tentativas++;
    }

    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  Math.floor(Math.random() * limite +1);
    let quantidadeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosDaLista == limite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    document.querySelector('input').value='';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','escolha um número entre 1 e 100');
}


function reiniciarJogo(){
    exibirMensagemInicial()
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



/*

###---FUNÇÃO DE SOMAR---###

var num1 ;
var num2;
var somas;

function somar(){
    console.log('O botão foi clicado');
    num1 = parseInt(prompt('Digite um número'));
    num2 = parseInt(prompt('Digite um número'));
    somas = num1 + num2;
    console.log(`A soma dos números é ${somas}`);
}

*/