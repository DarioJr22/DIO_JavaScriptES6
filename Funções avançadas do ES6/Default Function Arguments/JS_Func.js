//Default function arguments

//1 - Passndo parâmetros para uma função
function mult(a,b){
    return a*b
}
console.log('Retorno certo',mult(2,4))

//2 - Quando um parâmetro não é passado para uma função o valor retornado é undefined

console.log('Retorno Errado', mult(2))

//3 - Para burlar o erro o desenvolvedor passava uma lógica burlando-o

multply_Gambiarra = (a,b) => {
    b ? b = b : b = 1
    a ? a = a : a = 1
    return a*b
} 

console.log( 'Gambiarra', multply_Gambiarra(10));

// 4 - Porêm, no ES6 existe a possibilidade de passar um valo default na função que vc está declarando
//Exemplo:

multipy_Default = (a = 2,b = 1) =>{ return a*b }

console.log(multipy_Default(undefined,2));

// 5 - Podendo também utilizar parâmetros como atribuição 
//Exemplo

//Erro -> Atenção: sempre usar o parâmetro anterior quando for fazer esse tipo de operação
// Pois ao utilizar o parâmetro ele é declarado da esquerda pra direita
mutiply_Defult_Params = (a = b, b) => a*b

console.log('Erro, parâmetro `B` não foi incializado, parâmetro não declarado utilizado como argumento',mutiply_Defult_Params(4));


// 6 - Outra possibilidade é utilizar um callback como parâmetro Default
//Exemplo:

randomNumber = function() {
    console.log('====== Retornando um valor aleatório =========');

    return Math.random() * 10
    
}


 mutiply_Default_Callback = (a,b = randomNumber()) => a*b

 console.log(mutiply_Default_Callback(2));
