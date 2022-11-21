/* 
   Reorganizando um array de modo crescente, usando a função sort e uma função
   anônima

   O sort recebe opcionalmente uma função de comparação que, dados dois valores, 
   deve devolver um número inteiro:

    Se for 0 indica que são iguais
    Se for -1 indica que o primeiro valor é menor
    Se for 1, o segundo é menor.

    Na arrow function, para viabilizar os testes, "a" subtrai "b" (a - b), para
    ordem crescente e (b - a) para a ordem decrescente.
*/ 


let myList = [10,1, 5, 9, 8, 12, 15];

const sortedList = myList.sort((a,b) => b - a)

console.log(sortedList); // [15, 12, 10, 9, 8, 5, 1]

