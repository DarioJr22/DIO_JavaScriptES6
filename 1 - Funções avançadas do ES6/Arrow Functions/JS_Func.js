// Funções tradicionais

function log(param1){
    console.log(param1);
}

//Funções anônimas

var logAnomima = function(param1){
    console.log(param1);
}

// Se eu quisesse retorno 

var sum = function(a,b){
    return a+b
}

// Arrow function 

// Ela se utiliza desses 2 caractéres '=>' por isso o nome 'ARROW'
//Particularidades 

/*
Chaves {}
- No caso de ser apenas uma expressão isolada, pode-se omitir as chaves e o valor sai com um return
- No caso da expressão ser mais extensa ou um obj, adicione as chaves e especificações de return caso seja necessário

Parênteses ()

- No caso de ser apenas 1 argumento, pode omitir os parênteses
- Caso contrário, será necessário colacalos.
- Caso precise usar hash operator também, será necessário colacalos.

Hoisting 

O Hoisting permite que você execute funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.


//------ FAZER VÍDEO SEPARADO DISSO ------- //

Contexto 

A utilização de contexto nas ArrowFunctions no casso do 'THIS' é sempre de contexto global.

Nas funções clássicas esse contexto em alguns casos era fei
*/


// ------- Construir Interface para fazer o vídeo de maneira mais lúdica -----------//

// Expressãoes com parênteses

var sum = (a,b)=>a+b

// Expressões que pode colocar parênteses ao redor das chaves 
var createObj = () => ({ teste: 123})

// Expressãoes sem parênteses
var sum = a => a

// o 










//Teste Live Sever
/* 

var novoElemento = document.createElement('li');
var texto = document.createTextNode('terceiro item');
novoElemento.appendChild(texto);
var lista = document.getElementsByTagName('ul')[0];
var itens = document.getElementsByTagName('li');

lista.insertBefore(novoElemento,itens[0]); */