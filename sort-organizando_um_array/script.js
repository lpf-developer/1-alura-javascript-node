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

    * Link com o repositório github.
 * 
 * 1 :: git config --global user.email "franca.luiz.paulo.777@gmail.com"
 * 2 :: git config --global user.name "Luis Paulo França"
 * 3 :: git init
 * 4 :: git remote add origin https://github.com/lpf-developer/1-alura-javascript_web.git
 * 5 :: git add .
 * 6 :: git commit -m "alura-javascript_web-aula1"
 * 7 :: git push origin master
 
*/ 


let myList = [10,1, 5, 9, 8, 12, 15];

const sortedList = myList.sort((a,b) => b - a)

console.log(sortedList); // [15, 12, 10, 9, 8, 5, 1]

