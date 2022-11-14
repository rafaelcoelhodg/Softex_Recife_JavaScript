//Atividade Realizada em JavaScript e Node.Js
//Instruções: Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o Node.js instalado. 
//Após fazer essa migração, coloque seu código no arquivo "index.js", teste e tire um print.

//Criação do arquivo sistemaDeNota.js

var sistemaDeNota = function(nota1, nota2, nota3, media) {
    var nota1 = parseFloat(prompt("Informe a primeira nota: "));    // criação da variável da primeira nota
    var nota2 = parseFloat(prompt("Informe a segunda nota: "));     // criação da variável da segunda nota
    var nota3 = parseFloat(prompt("Informe a terceira nota: "));    // criação da variável da terceira nota

    var media = (nota1+nota2+nota3)/3;                              // criação da variável média das notas do aluno

    alert(media >=7 ? 'Aprovado' : 'Reprovado')

}

module.exports = sistemaDeNota;

// Criação do arquivo index.js para importação do arquivo sistemaDeNota.js

var sistemaDeNotafunc = require("./src/sistemaDeNota");
console.log(sistemaDeNotafunc);

// Resultado do prompt de comando do Node.js

PS C:\Workspace\softexRecifeExercicios\JavaScript\Módulo 3\node.js_exercicio_1> node index.js
[Function: sistemaDeNota]
