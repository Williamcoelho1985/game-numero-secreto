let listaDeNumerosSorteados = []; 
let nuemroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2} );// permite que o jogo com voz
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "jogo do número secreto")
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;// pega o valor digitado no campo

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas >1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');// reiniciando o botão
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor ');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior')
        }
        tentativas++;     
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*nuemroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista==nuemroLimite){
        listaDeNumerosSorteados=[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
//função sem paramentro e sem retorno
function limparCampo(){
    chute = document.querySelector('input');//pega o campo
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}