/**
 * Formatação numérica no formato de moeda corrente (real)
 * 
 * No JavaScript temos um método chamado toLocaleString() que converte um 
 * número para uma string, já tratando a questão do arredondamento e convertendo
 * para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa
 * do programador muito mais simples.
 * 
 * O método toLocaleString() recebe alguns argumento - um objeto literal com as 
 * propriedades -, no meu caso eu utilizei:

    style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

        "decimal" para representar números simples.

        "currency" que diz respeito ao formato monetário e que vai indicar a 
        moeda que vai ser utilizada.

        "percent" para formato percentual.

    currency: A moeda para usar na formatação monetária

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

    function ganhoPorHora(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
      
        const formatado = salarioHora.toLocaleString('pt-BR', { 
            style: 'currency', currency: 'BRL' 
        });
      
        return formatado;
      
      }

      console.log(ganhoPorHora(10000,160)); //62,50