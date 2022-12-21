//Enhanced object literals


//1 - Declaração de objetos 

var obj = {
    prop:'DIO'
}

//2 - Declaração de objetos usando uma variável na propriedade

var str = 'DIO'

var objVar = {
    prop: str
}

console.log(objVar);

//3 - Melhoria do ES6 -- Pode chamar o método pelo Objetos
// Geralmente quando uma propriedade armazena uma função, ela se torna um método

var enhanced = () => 'Fly'

var objVarEn = {
    enhanced

}

console.log(objVarEn.enhanced());

// 4 - Funciona também com a passagem de parâmetros tradicional


//Explicando exemplo:

//Usando uma default function argument,
/* 
- Foi feita uma função para retornar a tabuada do segundo argumento
- E se o segundo argumento estiver vazio ele retorna uma número aleatório em cada multiplicação 

*/
randomNumber = function() {
    console.log('====== Retornando um valor aleatório =========');

    return Math.random() * 10
    
}

var lista = [1,2,3,4,5,6,7,8,9,10]

var multipy = (a,b = randomNumber()) => {
    let resultados = []
    //Tabuada do B
        a.forEach(element => {
        resultados.push(element*b) 
        }
    
    );
    return resultados
}

//console.log(multipy(lista))

/* 5 - Ultilizando objetos para chamar essa função 
- Ou se necessário você pode definir essa func lá na definição da propriedade
*/

var operacoesMatematicas = {
    'multiplicacao':multipy,
    'soma': 'Ainda não atribuido nada '
}

console.log(operacoesMatematicas.multiplicacao(lista));
console.log(operacoesMatematicas);

// 6 - Utilizando operadores pra atribuir a função 
operacoesMatematicas['soma'] =  soma = (a,b) => a+b 

console.log(operacoesMatematicas);

//Quando não t