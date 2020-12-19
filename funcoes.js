/*let idade = 18;
console.log(idade);
console.log( typeof idade);

let nome = "Felipe";
console.log(nome);
console.log( typeof nome); //se coloca + antes da variavel transforma em numero

/* parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)
+numero1 + +numero2 + numero3
*/

/*
let verdade = false;
console.log(verdade);
console.log(typeof verdade);

let listaDeFrutas1 = "Maçã";
let listaDeFrutas2 = "Banana";
let listaDeFrutas3 = "Limão";

console.log(listaDeFrutas1 , listaDeFrutas2, listaDeFrutas3);

//array --> Variavel que eu consigo subdividir
let listaDeFrutas = ["Maçã" , "Banana", "Limão"];
console.dir(listaDeFrutas);
console.log( typeof listaDeFrutas);

//array possui posições, cada valor do array fica armazenado em uma posição, começando em 0. Quando eu quero exibir um valor especifico do array eu preciso indicar a posição onde se encontra esse valor  NomeDoArray[posição] .Ex listaDeFrutas[1] --> "Banana"
console.log(listaDeFrutas[1]);

let listaDeNotas = [ 5.5 , 7.9 , 9.5 , 3.0];
console.log(listaDeNotas);
console.dir(listaDeNotas);
console.log(listaDeNotas[2]);

// log traz os valores direto sem fechar
// dir traz valores fechado, mais bonito e visualizado

let personagemNome = "Escanor";
let personagemRaca = "Mutante";
let personagemClasse = "Mago";
let personagemVida = 100;
let personagemEnergia = 2000;
console.log(personagemNome, personagemRaca, personagemClasse, personagemVida, personagemEnergia);

// let personagem = ["Escanor", "Mutante", "Mago", 100 , 2000];
// console.dir(personagem);

// personagem[3] = 80;
// console.log(personagem);

//console.log(listaDeFrutas.length); 
//length é uma propriedade da lista

let personagem = {
    "nome" : "Escanor",
    "raca" : "Mutante",
    "classe" : "Mago",
    "vida" : 100,
    "energia" : 2000
};

    console.dir(personagem);
    console.log(personagem.vida);
    console.log("Batalha");
    personagem.vida = 40;
    console.log(personagem.vida);

    //Laço de repetição
    /*console.log();
    
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
    */

    /*let condition = true; //enquanto a condição for verdadeira NUNCA VAI PARAR
   while (condition) {
    console.log(1);
    condition = false;
   }*/

    //i --> incremento , i é uma variavel usada para controlar o laço de repetição
    //let i = i; 
    //while (i <= 10) {
    //console.log(i);
    // i++; --> tem essa outra forma
    //i = i + 1;  -->tem essa forma
    //} 

   /*i = 0;
   while (1 < listaDeFrutas.length) {
    console.log(listaDeFrutas[i]);
    i++;
   }*/
/*
   let i = 1;
   do {
       console.log(i);
       i++;
   } while (i<=10);*/

   console.clear();

   //Math.random() * (max - min) + min;
   let numeroComputador = parseInt(Math.random() * (10 - 1) + 1);
   console.log(numeroComputador);
   let numeroJogador = prompt("informe um número de 1 à 10");

   if(numeroJogador == numeroComputador){
       console.log("Você Ganhou");
   }else{
    console.log("Você Perdeu");
   }



