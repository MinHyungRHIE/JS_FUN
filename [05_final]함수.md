# `[5] 함수`

<br><br><br><br><br>

## 1. 함수 정의와 호출
### - 함수 선언(Function Statement)
```js
function square(number) {
  return number * number;
}
```

### - 함수 표현식(Function Expression)
익명 함수입니다. 꼭 함수를 선언할 떄 이름을 선언할 필요가 없다는 것입니다.
```js
var square = function(number) { 
    return number * number 
};
```

### - 함수 선언과 함수 표현식의 차이
 - Function Statement
```js
greeting(); //TypeError

var greeting = function(){
  console.log("hello");
}
```

 - Function Expression
```js
greeting(); //hello

function greeting(){
  console.log("hello");
}
```

<br><br><br><br><br>

## 2. 전역변수
전역 변수는 사실 global 객체의 속성(property)입니다. 웹 페이지에서 global 객체는 window 이므로, windows.variable 구문을 통해 전역 변수를 설정하고 접근할 수 있습니다.

```js
var globalScopeVar = 10;

console.log(global.globalScopeVar);
console.log(this.globalScopeVar);
```

<br><br><br><br><br>

## 3. 함수의 매개변수
JS에서 함수의 매개변수는 `undefined`가 기본입니다. 만일 매개변수를 실수로 넣지 않은 경우를 대비해 디폴트 매개변수가 필요합니다.

```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}

multiply(5); // 5
```
함수 본문에서 검사하는 부분이 필요없게 만들수 있습니다.

```js
function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5
```

다수의 매개변수를 받고 싶으면 아래와 같이 사용하시면 됩니다.
```js
function multiply(multiplier, ...theArgs) {
  var arr = [];
  for(var i = 0; i < theArgs.length; i++){
    arr[i] = theArgs[i] * multiplier;
  }
  return arr;
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```
theArgs는 배열로 들어옵니다.


<br><br><br><br><br>

## 4. arguments 객체

 함수의 인수는 배열과 비슷한 객체로 처리가 됩니다. 함수 내에서는, 전달 된 인수를 다음과 같이 다룰 수 있습니다.

```js
function myFunc(a, b, c, d){
    console.log(arguments[2]);
}

myFunc(2,4,6,8); // 6을 출력한다.
```
`arguments`는 배열과 흡사할 뿐이지 배열이 아닙니다. `arguments`객체는 배열을 다루는 모든 메서드를 가지고 있지도 않습니다.

```js
function myConcat(separator) {
   let result = "";

   // arguments를 이용하여 반복한다
   for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

// returns "red, orange, blue, "
console.log(myConcat(", ", "red", "orange", "blue"));

// returns "elephant; giraffe; lion; cheetah; "
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));

// returns "sage. basil. oregano. pepper. parsley. "
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
```
 이 함수는 분명 1개의 인자값만 받는다고 하였습니다. 그렇기에 `", "`나, `"; "`와 같은 첫번째로 나온 인자가 `separator`가 될 것입니다. 그러나 그 뒤에 이어져서 온 또 다른 인자값들은 `arguments`라는 객체를 이용하여 접근해야할 것입니다.


<br><br><br><br><br>

## 5. IIFE

`immediately-invoked function expression (or IIFE, pronounced "iffy")`

IIFE는 선언과 동시에 호출하는 익명 함수입니다.
```js
(function(){
// ...
})()
```
IIFE의 이점:

 - IIFE 자체가 무엇을 하는지 이해할 필요가 없도록 IIFE 내부의 코드 복잡도를 캡슐화합니다.
 - IIFE 내부에 변수들을 정의해서 global scope에 영향을 미치지 않게끔 합니다.

<br><br><br><br><br>

## 6. 스코프와 호이스팅 `var`,`let`,`const`

hoisting : 모든 변수 선언은 호이스트 됩니다.

변수를 선언할 때는 총 3가지 선언 중에 하나를 선택할 수 있습니다.

`var`, `let`, `const`

### - function scope : `var`

`var`은 **function scope**입니다. 무슨 말이냐면, 함수를 기준으로 범위를 나눈다는 말입니다.
```js
function func() {
    // var j           <-- j가 이곳으로 Hoisting됨
    for(var j=0; j<10; j++) {
      console.log('j', j)
    }
}
func();
console.log(j) // Error
```
`for문`은 함수가 아닙니다. 그렇기에 `var`이란 녀석은 함수를 만나기전까지 밖으로 나갈겁니다. 이것을 호이스팅이라고 합니다. 비록 선언은 `for문`안에서 했지만 실제로는 함수범위까지 옮겨져서 선언된다는 말입니다. 이것으로 인해 초래될 문제는 아래와 같습니다.
```javascript
//var i           <-- i가 이곳으로 Hoisting됨
for (var i = 0; i < 10; i++) {
    console.log('i', i)
}
console.log(i) //출력이 된다.
```
엄연히 말해서 `변수 i`는 `for문`을 위한 것이었고 `for문`이 마무리된 그 순간부터 `i`의 역할은 끝난 것입니다. 그러나 우리의 의도와 반대로 `i`는 계속 메모리에 남아있습니다.

이유는 `var`은 **function scope**이기 때문입니다. 본 코드에는 함수가 없습니다. 그렇기에 **global scope**에 있게 될 것입니다. 결국 `var`은 함수 내 범위 최상위에 정의되거나
**[function scope]**, 함수 밖 최상위에 정의되는 **[global scope]** 경우가 있습니다.

#### * IIFE의 경우

```javascript
(function() {
    //var k
    for(var k=0; k<10; k++) {
      console.log('k', k)
    }
})();
console.log('출력되나요?', k) // Error
```
이 역시 함수 밖에는 호출이 불가합니다. 그러나...

```javascript
//var t;
(function() {
    for(t=0; t<10; t++) {
        console.log('t', t)
    }
})();
console.log(t) //출력가능
//IIFE를 써도 또 이런식으로 hoisting되는...
```
IIFE라고 해도 만일 `var` 선언을 깜박하면 **global scope**로 넘어갑니다.

### - block scope : `let`, `const`

이 문제를 해결하기 위해 나온 변수가 바로 `let`, `const`입니다.

이들은 **block scope**입니다. 즉 Block문을 기준으로 범위가 결정되는 것입니다. 또한 `var`같은 경우는 변수가 재선언이되도 문제없이 되었습니다. 이는 프로그래밍 하면서 발생하는 에러에 대한 혼란을 야기할 것입니다. 

#### * `var`의 문제 : 변수 재선언
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

#### * TDZ(Temporal Dead Zone)

let과 const도 hoist가 발생합니다. 하지만...
```js
d = 'tdz' //Temporal Dead Zone
let d; //Error
```
`var`, `function`, `import`는 TDZ에 영향을 받지 않은 반면에 `let`과 `const`, 그리고 `class`는 TDZ에 영향을 받습니다. TDZ은 Declaration & initialization 이전의 공간입니다. 즉, TDZ에 영향을 받는다는 뜻은 선언 이전에는 사용할 수 없는 것입니다.

```js
let aaa;
aaa = 'later' 
```
let 은 변수를 먼저 선언하고 나중에 값을 할당하는 것이 가능하지만...
```js
const bbb //Error
```
const는 선언과 동시에 값을 할당해야만 합니다. 즉, Declaration과 initialization이 동시에 이루어져야 합니다.

[TDZ Reference](https://ui.toast.com/weekly-pick/ko_20191014)

#### * const의 보호 범위
`const`가 상수이긴 하지만 상수에 할당된 객체의 속성은 보호되지 않습니다.
```js
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
```
<br><br><br><br><br>

## 7. 클로저(Closure)

함수 내에 함수(중첩 함수)를 Nested Functnion이라고 합니다. 이 함수들 중에서 closure는 외부 변수들을 기억하고 그에 접근할 수 있는 함수를 말합니다.

```js
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() { // displayName() 은 내부 함수이며, 클로저다.
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();
```

displayName() 안에는 name이라는 지역변수가 없는데 외부 함수의 변수에 접근할 수 있기 때문에 사용할 수 있습니다. 내부함수가 클로저를 형성하였습니다.

### - 외부 함수와 내부 함수의 관계

```js
function outside(a,b) {
  function inside(x) {
    return x + x;
  }
  return outside(a) + outside(b);
}
outside(5, 5); // returns 10
outside(10, 20); // returns 30
```
 - 내부 함수는 외부 함수의 명령문에서만 액세스할 수 있습니다.
 - 외부 함수는 내부 함수의 인수와 변수를 사용할 수 없는 반면, 내부 함수는 외부 함수의 인수와 변수를 사용할 수 있습니다.

 ```js
function outside(){
    let x = 10;
    return function inside(){
        console.log(++x);
    }
}

var getFunc = outside();
getFunc(); //11
getFunc(); //12
getFunc(); //13
getFunc(); //14
 ```
 - 잘 보면 이미 outside()라는 함수는 inside()라는 함수를 return 함으로써 역할이 끝났지만 inside()함수는 outside()함수의 x변수를 사용하고 있습니다. 그래서 outside()함수는 비록 끝이나도 x 변수 메모리 공간에 계속 엑세스를 할 수 있습니다. 메모리는 그 무엇도 내부 함수에 접근하지 않을 때만 해제됩니다.

### - 외부 변수 접근 및 변경

내부 함수가 외부 함수 안에서 정의된 모든 변수와 함수들을 완전하게 접근 할 수 있도록 허용하는 것이 클로저입니다. 그러므로 클로저는 외부 변수를 접근하여 변경하는 것도 가능합니다.

```js
function wish(thing) {
  var _thing = thing;
  return function() {
    console.log('I want --> ' + _thing);
    console.log('ouside var : '+ thing);
  };
}

var iPhone = wish('iPhone'); 
var Galaxy = wish('Galaxy'); 

iPhone(); 
// I want --> iPhone
// ouside var : iPhone
Galaxy(); 
// I want --> Galaxy
// ouside var : Galaxy

// 메모리에서 계속 참조가 일어나기 때문에 클로저의 참조를 제거해야 한다.
iPhone = null;
Galaxy = null;
```

### - 이름 충돌
```js
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10
```
이 코드는 inside를 return 하게 됩니다. 그러나 x라는 변수 이름이 같습니다. 그렇다면 10을 return할까요 아니면 20을 return 할까요?

정답은 20입니다.

클러저의 범위에서 두 개의 인수 또는 변수의 이름이 같은 경우 더 안쪽 범위가 우선순위를 갖게 됩니다.

이게 바로 범위 체인(scope chain)이라고 하는데 체인에서 첫번째는 가장 안쪽 범위이고, 마지막은 가장 바깥쪽의 범위입니다.


### - 클로저를 이용해 변수를 안전하게 저장하기
```js
var getCode = (function(){
  var _secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
  
  return function () {
    return _secureCode[2];
  };
})();

getCode();    // Returns "E"
getCode.secureCode //undefined
```
원래 secureCode 변수의 값이 뭐였는지 확인할려고 했는데 undefined가 나옵니다. 함수 자체도 익명에다가 getCode함수에 대한 정보를 출력하면 아래와 같이 나옵니다. 은닉하고 싶은 변수를 접근하지 못하게 하는 것이죠

```console
ƒ () {
    return secureCode[2];
  }
```

### - 클로저 사용시 주의해야할 점
만약 내부 함수가 외부 함수의 범위에 있는 이름과 같은 변수를 정의하였을 경우애눈 다시는 외부 함수 범위의 변수를 참조(접근)할 방법이 없습니다.

```js
var createPet = function(name) {  // 외부 함수가 "name" 이라는 변수를 정의하였다
  return {
    setName: function(name) {    // 내부 함수 또한 "name" 이라는 변수를 정의하였다
      name = name;               // ??? 어떻게 우리는 외부 함수에 정의된 "name"에 접근할까??? 방법이 없다.
    }
  }
}

var result = createPet("Cookie");
result.setName("Mirae");
console.log(result.name); //undefined
```