# Javascript 기초

## Javascript 시작하기

### 자바스크립트 파일 불러오기

 - make `main.js` file first

```javascript
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```

```html
<script src="scripts/main.js"></script>
```

### 자료형 종류

| Variable | Example |
|:---:|:---|
|String|let myVariable = 'Bob';|
|Number|let myVariable = 10;|
|Boolean|let myVariable = true;|
|Array|let myVariable = [1, 'Bob', 10, 'Steve'];|
|Object|let myVariable = document.querySelector('h1');|

### 주석
```javascript
/*
    Everything in between is a comment
*/
```
```javascript
// This is a comment
```

### 연산자

다른 언어의 연산자와 비슷하지만 특별히 봐야할 연산자는 다음과 같습니다.
<br>

|연산자|설명|
|:---:|:---|
|`==/!=`| 값만 비교 |
|`===/!==`| 값 뿐만 아니라 자료형도 비교 |

### [중요] 변수 선언 : var, let, const

 - hoisting : 모든 변수 선언은 호이스트 된다.

    - 변수가 함수 내에 정의됨[function scope] ->선언이 함수의 최상위

    - 변수가 함수 밖에 정의됨[global scope] -> 전역 컨텍스트의 최상위

#### var

먼저 `var` 선언부터 살펴보자
```javascript
//var i           <-- i가 이곳으로 Hoisting됨
for (var i = 0; i < 10; i++) {
    console.log('i', i)
}
console.log('출력되나요? ', i) //출력이 된다.
```
for문이 끝나도 for문 안에 쓰인 변수 호출이 가능하다는 것을 볼 수 있다.

그렇다면 함수 내에 선언되는 `var` 선언은 어떻게 될까?

```javascript
function func() {
    // var j           <-- j가 이곳으로 Hoisting됨
    for(var j=0; j<10; j++) {
      console.log('j', j)
    }
}
func();
console.log('출력되나요?', j) // Error
```
이번에는 함수 밖에 호출이 불가하다

`immediately-invoked function expression (or IIFE, pronounced "iffy")`

IIFE인 경우엔 변수 스코프가 어떻게 될까?
```javascript
(function() {
    //var k
    for(var k=0; k<10; k++) {
      console.log('k', k)
    }
})();
console.log('출력되나요?', k) // Error
```
이 역시 함수 밖에는 호출이 불가하다.

그런데 IIFE라고 해도 만일 `var` 선언을 깜박하면 어떻게 될까?

```javascript
//var t;
(function() {
    for(t=0; t<10; t++) {
        console.log('t', t)
    }
})();
console.log('출력되나요?', t)
//IIFE를 써도 또 이런식으로 hoisting되는...
```
놀랍게도 global scope로 적용되는 것을 볼 수 있다. 변수를 선언할 때는 최소한 `var`이라도 선언 해 에러를 예방하자.

혹은 `use strict`를 사용하자
```javascript
(function() {
    'use strict'
    for(v=0; v<10; v++) {
        console.log('v', v)
    }
})()
```
출력 결과 화면
```
   for(v=0; v<10; v++) {
         ^

ReferenceError: v is not defined
    at c:\Users\quoti\Desktop\OnlyLocal\Code-Source\Playground.JS\legacy\01-var-let-const.js:53:10
    at Object.<anonymous> (c:\Users\quoti\Desktop\OnlyLocal\Code-Source\Playground.JS\legacy\01-var-let-const.js:56:3)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
Process exited with code 1
```

#### let, const

var의 문제 : 변수 재선언
```js
var a = 10;
var a = 'hi';
a = 'hello'
console.log('var : ' + a);
```
 - 해결법 : 변수 재선언 불가하게 만들기
    - let : mutable
    - const : immutable
```js
let b = 10;
let b = 'hi'; //Error
b = 'hello'
console.log('let : ' + b)

const c = 10;
const c = 'hi'; //Error
c = 'hello' //Error
console.log('const : ' + c)
```

let과 const도 hoist가 발생한다. 하지만...
```js
d = 'tdz'
let d; //Error
```
 
`TDZ(Temporal Dead Zone)`
: JS 인터프리터 내부에서 변수는 총 3단계를 걸쳐 생성된다.

1. Declaration : 스코프와 변수 객체가 생성되고 스코프가 변수 객체를 참조한다.
  
1. Initialization : 변수 객체가 가질 값을 위해 메모리에 공간을 할당한다. 이때 초기화되는 값은 undefined이다.

1. Assignment : 변수 객체에 값을 할당한다.

Declaration만 일어나면 Initialization이 되지않아 변수에 담길 값을 위한 공간이 메모리에 할당되지 않은 상태
```js
let aaa;
aaa = 'later' 
```
let 은 변수를 먼저 선언하고 나중에 값을 할당하는 것이 가능하지만...
```js
const bbb //Error
```
const는 선언과 동시에 값을 할당해야만 한다.

#### 총정리 + 추가 정보
 
- var : 함수 레벨 스코프, function scope
- let, const : 블록 레벨 스코프, block scope

`var`

만일 변수를 처음 선언할 때 키워드(var, let, const...) 없이 선언하면 자동으로 var로 선언된다.
```js
var globalVar = 'the global variable'

if(globalVar === 'the global variable'){
    var globalVar = 'the local variable'
}

console.log(globalVar);
```
출력화면
```
the local variable
```
<br>

`let, const`
```js
let globalLet = 'the global variable'

if(globalLet === 'the global variable'){
    let globalLet = 'the local variable'
    let localLet = 'the local variable2'
}

console.log(globalLet);
console.log(localVar); //Error
```
출력화면
```
the global variable
```

### 함수

선언하는 방법
```js
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
```

사용하는 방법
```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```
### 이벤트

이벤트를 헨들링하는 많은 방법이 있다.

`<html>` 요소를 선택하고 `onclick`이라는 핸들러(handler)를 추가한다.

그리고 익명 함수(anonymous function)을 추가해 `onclick` 이벤트 발생시 처리할 동작을 선언한다.

```js
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
```
다음과 같이 할 수도 있다.
```js
let myHTML = document.querySelector('html');
myHTML.onclick = function() {};
```

### 조건문

조건문 문법 역시 다른 언어들과 똑같다.
```js
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
```

null 처리하는 방법
```js
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
```