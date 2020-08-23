# Javascript 기초

![browser](./mdsrc/browser.png)

## Javascript란?

JavaScript(JS)는 가벼운 인터프리터 또는 **JIT컴파일** 언어

 - JIT 컴파일

JIT 컴파일(just-in-time compilation) 또는 동적 번역(dynamic translation)은 프로그램을 실제 실행하는 시점에 기계어로 번역하는 컴파일 기법

전통적인 입장에서 컴퓨터 프로그램을 만드는 방법

1. 인터프리트 방식은 실행 중 프로그래밍 언어를 읽어가면서 해당 기능에 대응하는 기계어 코드를 실행

2. 정적 컴파일은 실행하기 전에 프로그램 코드를 기계어로 번역한다.

JIT 컴파일러는 두 가지의 방식을 혼합한 방식

실행 시점에서 인터프리트 방식으로 기계어 코드를 생성하면서 그 코드를 캐싱하여, 같은 함수가 여러 번 불릴 때 매번 기계어 코드를 생성하는 것을 방지한다.

최근의 자바 가상 머신과 .NET, V8(node.js)에서는 JIT 컴파일을 지원한다. 즉, 자바 컴파일러가 자바 프로그램 코드를 바이트코드로 변환한 다음, 실제 바이트코드를 실행하는 시점에서 자바 가상 머신이 바이트코드를 JIT 컴파일을 통해 기계어로 변환한다.

바이트코드 컴파일러는 소스 코드를 중간언어인 바이트코드로 변환한다. 바이트코드는 기계어는 아니지만 가상 머신에 의해 기계어로 손쉽게 변환할 수 있는 코드이다. JIT 컴파일러는 바이트코드를 읽어 빠른 속도로 기계어를 생성할 수 있다. 이런 기계어 변환은 코드가 실행되기 과정에 실시간으로 일어나며(그래서 Just-In-Time이다), 전체 코드의 필요한 부분만 변환한다. 기계어로 변환된 코드는 캐시에 저장되기 때문에 재사용시 컴파일을 다시 할 필요가 없다.

일반적인 인터프러터 언어(예시: cpython)는 바이트코드나 소스코드를 최적화 과정이 없기 번역하기 때문에 성능이 낮다. 반면 정적으로 컴파일하는 언어(예시: c 언어)는 실행 전에 무조건 컴파일을 해야하기 때문에 다양한 플랫폼에 맞게 컴파일을 하려면 시간이 오래 걸린다. 동적 컴파일 환경은 실행 과정에서 컴파일을 할 수 있기 위해 만들어졌다. JIT는 정적 컴파일러 만큼 빠르면서 인터프러터 언어의 빠른 응답속도를 추구하기 위해 사용한다. 바이트코드 컴파일러가 시간이 많이 소요되는 최적화를 미리 해주기 때문에 바이트코드에서 기계어 번역은 훨씬 빠르게 진행될 수 있다. 또한 바이트코드는 이식성이 뛰어나 가상 머신이 설치되어 있으면 빠르게 실행할 수 있다.

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

### HTML 속 JS 활용 팁

#### 함수 활용은 이렇게

```js
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
//HTML 내의 <scirpt>태그 내부에 작성

<button onclick="createParagraph()">Click me!</button>
```

하지만, 이 방법은 효율적이지 않습니다. 이는 자바스크립트와 함께 HTML 소스를 복잡하게 할 수 있습니다. 또한 함수를 만들기 위한 모든 버튼 마다 onclick="createParagraph()" 속성을 포함해야합니다.

그러므로...
```js
const buttons = document.querySelectorAll('button');
//모든 <button>태그를 List 형태로 buttons 변수에 저장한다.

for (let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
//복수이기 때문에 for를 사용해 루프를 돌린다.
```
 페이지가 많든, 버튼의 수가 많든 적든 상관없이 모든 버튼들이 같은 기능을 할 수 있도록 합니다.

#### 스크립트 로딩은 이렇게

작성된 스크립트를 브라우저가 적절한 때에 로딩하는것에 대해 몇가지 이슈가 있습니다. 중요한 것은 모든 HTML 요소는 순서대로 페이지에 로드된다는 것입니다. 만약 당신이 자바스크립트를 이용해 HTML 요소를 조작할 경우(정확하게는 DOM), 자바스크립트 코드가 조작 대상인 HTML 요소보다 먼저 실행된다면 조작할 요소가 존재하지 않는 상태이기 때문에 제대로 동작하지 않을 것입니다.

내부와 외부의 자바스크립트는 HTML Document의 body가 해석되기 전인 head 부분에 로드되고 실행되었습니다. 이는 에러를 일으킬 수 있습니다. 그래서 여기에 사용되는 몇가지 해결방법들이 있습니다.

 - 내부 JS

```js
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```

이 이벤트리스너는 "DOMContentLoad" 이벤트가 발생되었을 때 function()을 실행한다는 의미입니다.

"DOMContentLoad" 이벤트는 브라우저가 완전히 로드되고 해석될때 발생됩니다. function(){} 내부의 자바스크립트 구문은 이벤트가 발생되기 전까지는 실행되지 않습니다. 따라서 모든 body태그의 요소가 로드된 이후 자바스크립트 코드가 실행되도록 만들어 에러를 피할 수 있습니다.

 - 외부 JS

```js
<script src="script.js" async></script>
```
일반적으로 HTML요소를 로딩하는 중 \<scirpt>태그를 만나면 JavaScript의 내용이 모두 다운될 때까지 HTML로딩은 멈추게 되는데, async요소는 비동기방식으로 \<script>태그에 도달했을 때 브라우저에게 HTML 요소를 멈추지 않고 다운받도록 유지시킵니다.

이 경우 script와 HTML은 모두 동시에 로드되고 작동할 것입니다.

예전 방식은 scirpt 요소를 body태그의 맨 끝에 넣는 방법이었습니다(</body> 바로 위에). 이 방식을 사용해도 body태그가 모두 로드된 이후 scirpt가 실행되게 만들 수 있습니다. 문제는 이 방법과 DOMContentLoaded를 이용한 방법 모두 HTML DOM이 로드되기 전까지 script의 로딩과 파싱이 완전히 차단된다는 것입다. 이는 많은 자바스크립트 코드를 다루는 규모가 큰 사이트의 경우 사이트를 느리게 만드는 중요한 성능 문제를 야기할 수 있습니다. 이것이 async 속성을 사용해야 하는 이유입니다!


async 스크립트는 페이지 렌더링의 중단 없이 스크립트를 다운로드 하고, 또한 스크립트의 다운로드가 끝나자 마자 이를 실행시킵니다. async는 외부 스크립트끼리의 구체적인 실행 순서는 보장하지 않고, 단지 나머지 페이지가 나타나는 동안 스크립트가 비동기방식으로 다운로드 되어 중단되지 않는다는 것만 보장합니다. async는 각각의 스크립트가 독립적으로, 서로에게 의존하지 않는 관계일 때 적절합니다.

```js
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```
3개의 스크립트를 로딩하지만 이들의 순서는 보장할 수 없습니다.

script3.js에 있는 함수가 jquery.js의 함수를 사용한다면 에러를 발생될 수 있다는 것을 의미합니다.

```js
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```
Defer는 이와 다르게 순서대로 다운로드 한 후 모든 스크립트와 내용이 다운로드 되었을 때 실행됩니다:

따라서 위의 예제의 경우에는 jquery.js -> script2.js -> script3.js 의 순서가 보장됩니다.

### 문자열 다루기
 - 문자열 길이 활용

```js
var browserType = 'mozilla';
browserType[browserType.length-1];
```

 - 문자열 찾기 활용
```js
var browserType = 'mozilla';
browserType.indexOf('zilla'); // 2
browserType.indexOf('vanilla'); // -1
```
 
 - 문자열 자르기
```js
var browserType = 'mozilla';
browserType.slice(0,3); // "moz"
browserType.slice(2); // "zilla"
```

 - 대소문자 변경
```js
var radData = 'My NaMe Is MuD';
radData.toLowerCase(); // "my name is mud"
radData.toUpperCase(); // "MY NAME IS MUD"
```

 - 문자열 일부 변경
```js
browserType.replace('moz','van');
```
replace() 리턴값은 replace결과 문자열인데 만일 바뀜을 당하는 문자가 없다면 그냥 그대로 다시 리턴되고 만일 바뀜을 당하는 문자가 있다면, 바뀐 후의 문지열이 리턴된다.

### 배열
여타 프로그래밍 언어가 배열을 다루는 법과 같다.method만 다뤄보자.

 - split() : 문자열 분리
```js
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
myArray;
// (6) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```

 - join() : 문자열 합체
```js
var myNewString = myArray.join(',');
myNewString;
```
배열을 문자열로 변환하는 또 다른 방법은 **`toString()`** 를 사용하는 것 
```js
var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
```
 - item 추가/제거

push() : 배열의 끝에 추가할 item을 반드시 하나 이상 포함해야 한다는 점을 기억
```js
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
```

pop() : 배열 끝 삭제
```js
var myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
myArray.pop()
//return "Carlisle"
myArray
// (5) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds"]
```

*그러면 배열의 제일 처음 부분 item 추가/제거는?*

unshift() <-> push()
```js
myArray.unshift('Edinburgh');
myArray;
```
shift() <-> pop()
```js
myArray.shift();
```