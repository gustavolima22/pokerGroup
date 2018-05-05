'use strict'

var valorCarta = ['2','3','4','5','6','7','8','9','10','J','Q','R','S'];
//J = Valete    Q = Rainha      R = Rei     S = Ás
// var valorNaipe = ['D','H','S','C'];
var valorNaipe = ['D','H','S','C'];
//Ouro (D), Copa (H), Espadas (S), Paus (C)
var cartaRetirada = [];
var jogador1 = {
    cartas: [],
    valorMao: null
};
var jogador2 = {
    cartas: [],
    valorMao: null
};
var carta = '';
var naipe = '';

var regras = {
    cartaAlta: 1,
    umPar: 2,
    doisPares: 3,
    trinca: 4,
    straight: 5,
    flush: 6,
    fullHouse: 7,
    quadra: 8,
    straightFlush: 9,
    royalFlush: 10
};

while(cartaRetirada.length < 10){
    carta = valorCarta[Math.floor((Math.random() * 13))];
    naipe =  valorNaipe[Math.floor((Math.random() * 4))];
    cartaRetirada.push(carta + naipe);
    console.log(cartaRetirada);
}
for(var i = 0; i < 5; i++){
    jogador1.cartas[i] = cartaRetirada[i];
}
for(var i = 5; i < 10; i++){
    jogador2.cartas[i-5] = cartaRetirada[i];
}
console.log('Jogador 1: ');
console.log(jogador1.cartas);
console.log('Jogador 2: ');
console.log(jogador2.cartas);

function setHandValue(player){
    player.valorMao = 1; //Carta alta
    player.valorMao = isFlush(player.cartas);
}

function isFlush(playerHand){
    var naipe = playerHand[0].substr(-1,1);
    var naipeDiferente = false;
    for(var i = 1; i < 5; i++){
        if(playerHand[i].substr(-1,1) !== naipe)
            naipeDiferente = true;
    }
    
    if(naipeDiferente){
        return 1; //Carta alta
    }else{
        return 6; //Flush
    }
}

function sequencia(playerHand){
    var possuiCarta = {
        dois: false,
        tres: false,
        quatro: false,
        cinco: false,
        seis: false,
        sete: false,
        oito: false,
        nove: false,
        dez: false,
        valete: false,
        dama: false,
        rei: false,
        as: false
    }
    for(var i = 0; i < 5; i++){
        possuiCarta.dois = playerHand[i].search('2') === 0;
        possuiCarta.tres = playerHand[i].search('3') === 0;
        possuiCarta.quatro = playerHand[i].search('4') === 0;
        possuiCarta.cinco = playerHand[i].search('5') === 0;
        possuiCarta.seis = playerHand[i].search('6') === 0;
        possuiCarta.sete = playerHand[i].search('7') === 0;
        possuiCarta.oito = playerHand[i].search('8') === 0;
        possuiCarta.nove = playerHand[i].search('9') === 0;
        possuiCarta.dez = playerHand[i].search('10') === 0;
        possuiCarta.valete = playerHand[i].search('J') === 0;
        possuiCarta.dama = playerHand[i].search('Q') === 0;
        possuiCarta.rei = playerHand[i].search('R') === 0;
        possuiCarta.as = playerHand[i].search('S') === 0;
    }
    if(possuiCarta.dez && possuiCarta.valete && possuiCarta.dama && possuiCarta.rei && possuiCarta.as){// Royal flush
        return 10; //Caso a sequencia seja de dez até ás ele é um Royal Flush
    }else{
        var sequenciaAs = possuiCarta.as && possuiCarta.dois && possuiCarta.tres && possuiCarta.quatro && possuiCarta.cinco;
        var sequenciaDois = possuiCarta.dois && possuiCarta.tres && possuiCarta.quatro && possuiCarta.cinco && possuiCarta.seis;
        var sequenciaTres = possuiCarta.tres && possuiCarta.quatro && possuiCarta.cinco && possuiCarta.seis && possuiCarta.sete;
        var sequenciaQuatro = possuiCarta.quatro && possuiCarta.cinco && possuiCarta.seis && possuiCarta.sete && possuiCarta.oito;
        var sequenciaCinco = possuiCarta.cinco && possuiCarta.seis && possuiCarta.sete && possuiCarta.oito && possuiCarta.nove;
        var sequenciaSeis = possuiCarta.seis && possuiCarta.sete && possuiCarta.oito && possuiCarta.nove && possuiCarta.dez;
        var sequenciaSete = possuiCarta.sete && possuiCarta.oito && possuiCarta.nove && possuiCarta.dez && possuiCarta.valete;
        var sequenciaOito = possuiCarta.oito && possuiCarta.nove && possuiCarta.dez && possuiCarta.valete && possuiCarta.dama;
        var sequenciaNove = possuiCarta.nove && possuiCarta.dez && possuiCarta.valete && possuiCarta.dama && possuiCarta.rei;
        if(sequenciaAs || sequenciaDois || sequenciaTres || sequenciaQuatro || sequenciaCinco || sequenciaSeis || sequenciaSete || sequenciaOito || sequenciaNove){
            return 9; //Caso qualquer sequencia for verdadeira ele tem um Straight Flush
        }else{
            return 6; //Caso nã seja sequencia, ele é um flush
        }
    }
}

function comparaMaosJogadores(player1, player2){
    if(player1.valorMao > player2.valorMao){
        console.log('Jogador 1 ganhou');
    }else if(player1.valorMao < player2.valorMao){
        console.log('Jogador 2 ganhou');
    }else{
        console.log('Empate');
    }
}

setHandValue(jogador1);
setHandValue(jogador2);
comparaMaosJogadores(jogador1,jogador2);
