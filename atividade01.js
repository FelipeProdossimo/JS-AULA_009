for(let i = 1 ; i <= 10; i++){
    document.querySelector("#contagem").innerHTML += i + "<br>";
}

/*
laço de repetições são blocos dentro de nosso código que será até que a condição seja falsa, no caso do FOR ele possui 3 partes:

for (inicialização de varíavel ; condição ; incremento)

for (let i = 0                 ; i <= 10  ; i++)

inicialização de varíavel --> aqui colocamos um valor inicial para varíavel que servirá para controle de nosso laço. Normalmente o nome dessa varíavel é i(increment) porém não há problemas em usar outro nome.

Condição --> teste que será realizado em cada nova passagem do laço, o conteúdo dentro do laço será executado enquanto a condição estiver retornando verdadeiro.

Incremento --> aumento no número da varíavel. i++ é a mesma coisa que i = i + 1
*/