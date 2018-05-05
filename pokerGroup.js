'use strict'

var valorCarta = ['2','3','4','5','6','7','8','9','10','J','Q','R','S'];
//J = Valete    Q = Rainha      R = Rei     S = Ás
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
    'Carta Alta': 1,
    'Um Par': 2,
    'Dois Pares': 3,
    'Trinca': 4,
    'Straight': 5,
    'Flush': 6,
    'Full House': 7,
    'Quadra': 8,
    'Straight Flush': 9,
    'Royal Flush': 10
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
    player.valorMao = 1;
    /* if(){

    }else if(){

    }else if(){
        
    }else if(){
        
    }else if(){
        
    }else if(){
        
    }else if(){
        
    }else if(){
        
    }else if(){
        
    } */
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