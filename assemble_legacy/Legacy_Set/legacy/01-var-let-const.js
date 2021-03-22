/* 
    var, let, const

    hoisting : 모든 변수 선언은 호이스트 된다.
        - 변수가 함수 내에 정의됨[function scope] ->선언이 함수의 최상위
        - 변수가 함수 밖에 정의됨[global scope] -> 전역 컨텍스트의 최상위
*/
function line(str){
    console.log('----------%s번째 라인----------',str)
}
/***    var    ***/
////////////////////////////////////////////////////////////////////////////////
line("1")
//var i           <-- i가 이곳으로 Hoisting됨
for (var i = 0; i < 10; i++) {
    console.log('i', i)
}
console.log('출력되나요? ', i) //출력이 된다..?
////////////////////////////////////////////////////////////////////////////////
line("2")
function func() {
    // var j           <-- j가 이곳으로 Hoisting됨
    for(var j=0; j<10; j++) {
      console.log('j', j)
    }
}
func();
// console.log('출력되나요?', j) // Error
////////////////////////////////////////////////////////////////////////////////
line("3");
/*immediately-invoked function expression (or IIFE, pronounced "iffy")*/
(function() {
    //var k
    for(var k=0; k<10; k++) {
      console.log('k', k)
    }
})();
// console.log('출력되나요?', k) // Error
////////////////////////////////////////////////////////////////////////////////
line("4");
//var t;
(function() {
    for(t=0; t<10; t++) {
        console.log('t', t)
    }
})();
console.log('출력되나요?', t)
//IIFE를 써도 또 이런식으로 hoisting되는...
////////////////////////////////////////////////////////////////////////////////
line("5");
(function() {
    'use strict'
    for(v=0; v<10; v++) {
        console.log('v', v)
    }
})()
console.log('출력되나요?', v)
////////////////////////////////////////////////////////////////////////////////