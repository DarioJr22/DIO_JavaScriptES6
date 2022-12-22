// Problema - Se eu quiser por algumotivo
//Passar mais argumentos do que é declarado na função.

function sum(a,b){
    return a+b
}

console.log(sum(5,5,4,5,3,3));

// 1 - Maneira antiga de resolver o problema

function sum_gambiarra(a,b){
  let value = 0
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value
}

console.log(sum_gambiarra(4,1,5412,3123,32));

//2 - Maneira ES6 de resolver o problema - Rest Operator

function sum_restop([...args]){
    return args.reduce((a,b)=>a+b,0);
}

console.log(sum_restop([1,2,3,4,4,4]));

//3 - Com Rest Operators, você pode ter alguns parâmetros fixos
// e trasformar o restante em um rest operator
function sum_restop_paramF([a,b,c,...args]){
}

//

const mutiply = (...args) => args.reduce((a,b)=> a *b,1)

//Obs: Em arrow functions o arguments não funcionam.
//antes do ES6 era usado o método apply para passar parametros pra outra função