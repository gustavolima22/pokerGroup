'use strict'

var valorCarta = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
var valorNaipe = ['D','H','S','C'];
var cartaRetirada = [];
var jogador1 = [];
var jogador2 = [];

while(cartaRetirada.length < 10){
    cartaRetirada.push(valorCarta[Math.floor((Math.random() * 13) + 1)] + valorNaipe[Math.floor((Math.random() * 4) + 1)]);
}
//for(var i = 0; i < 5; i++){
//    jogador1[i] = cartaRetirada[i];
//}
//for(var i = 5; i < 10; i++){
//    jogador2[i-5] = cartaRetirada[i-5];
//}
//console.log('Jogador 1: ');
//console.log(jogador1);
//console.log('Jogador 2: ');
//console.log(jogador2);