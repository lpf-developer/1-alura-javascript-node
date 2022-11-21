/**
 * Caracteres unicode e como são implementados em javascript
 * 
 * Para executar este programa, vá ao terminal e digite:
 * node + nome do arquivo.js 
 * 
 * Os caracteres \u no início do código são caracteres de escape que usamos 
 * para sinalizar ao JavaScript de que estamos falando de códigos Unicode, 
 * e não de strings de texto usuais. 
 * 
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

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)