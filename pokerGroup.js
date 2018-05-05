'use strict'

var valorCarta = ['2','3','4','5','6','7','8','9','10','J','Q','R','S'];
//J = Valete    Q = Rainha      R = Rei     S = Ás
var valorNaipe = ['D','H','S','C'];
var valorNaipe2 = ['D','D','D','D'];
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
    naipe = cartaRetirada.length < 5 ? valorNaipe[Math.floor((Math.random() * 4))] : valorNaipe2[Math.floor((Math.random() * 4))];
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
    player.valorMao = 1;
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
        return 1;
    }else{
        return 6;
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

//gustavo.lima@groupsoftware.com.br