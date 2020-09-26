/* 
var : 함수 레벨 스코프, function scope
let, const : 블록 레벨 스코프, block scope
*/
/*** var ***/
//만일 변수를 처음 선언할 때 키워드(var, let, const...) 없이 선언하면 자동으로 var로 선언된다.
var globalVar = 'the global variable'

if(globalVar === 'the global variable'){
    var globalVar = 'the local variable'
}

console.log(globalVar);

/*** let, const ***/
let globalLet = 'the global variable'

if(globalLet === 'the global variable'){
    let globalLet = 'the local variable'
    let localLet = 'the local variable2'
}

console.log(globalLet);
// console.log(localVar); //Error