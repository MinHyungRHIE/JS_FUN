
## 7. 화살표 함수

함수를 더 깔끔하게 만들어 봅시다.
```js
var add = function(n1, n2){
  return n1 + n2;
}

console.log(add(10, 20));

var add = (n1, n2) => n1 + n2;

console.log(add(30, 40));
```
매개 변수가 한개라면 괄호`( )`를 생략 가능합니다.
```js
( x => console.log(x) )("hello");
```

반환하기 싫거나 여러줄을 사용하고 싶을 때는 아래와 같이 하시면 됩니다.

```js
var add = (n1, n2)=>{ n1 + n2 };
//{}을 사용했는데 return이 없습니다.
console.log(add(5, 10)); //undefined

var add = (n1, n2)=>{
  console.log("더하기를 진행합니다");
  return n1 + n2;
}

console.log(add(40,50)); //90
```
function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this입니다.

나중에 객체와 콜백함수를 배울때 이해하실 겁니다. 이 부분은 기억하고 있다가 나중에 배우시고난 후 보십시오.

### 주의! 선지식 필요한 부분 : 객체와 콜백함수

#### 일반 함수

자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

콜백 함수 내부의 this는 전역 객체 window를 가리킨다.

콜백 함수 내부의 this가 메소드를 호출한 객체(생성자 함수의 인스턴스)를 가리키게 하려면 아래의 3가지 방법이 있다.
 - `var that = this;`
 - `map(func, this)`
 - `ES5에 추가된 Function.prototype.bind()로 this를 바인딩`

#### 화살표 함수
화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다. 이를 Lexical this라 한다.

화살표 함수가 늘 좋은 점만 있는 것은 아니다.
```js
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi undefined
```
위 예제의 경우, 메소드로 정의한 화살표 함수 내부의 this는 메소드를 소유한 객체, 즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다. 따라서 화살표 함수로 메소드를 정의하는 것은 바람직하지 않다.

```js
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // TypeError: Foo is not a constructor
```
화살표 함수는 생성자 함수로 사용할 수 없다. 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다. 하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다.

정리하자면

화살표 함수가 일반 함수와 다른 점은 다음과 같습니다.

 - this를 가지지 않습니다.
 - arguments를 지원하지 않습니다.
 - new와 함께 호출할 수 없습니다.
 - super가 없습니다.
<br><br><br><br><br>



















## 9. use strict
엄격모드입니다. 엄격모드는 전체 스크립트 또는 부분 함수에 적용가능합니다. 단, {} 괄호로 묶여진 블럭문에는 적용되지 않습니다. 
[가이드북](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
<br><br><br><br><br>



















## 배열로 `정규표현식` 사용하기
[나중에 필요할 때 찾아보기 위한 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


























## 6. Class and Factory
class는 ES6(ECMAScript 2015)에서 추가된 문법

[JavaScript Factory functions vs Constructor functions.](https://medium.com/@chamikakasun/javascript-factory-functions-vs-constructor-functions-585919818afe)

[Class vs Factory function: exploring the way forward](https://www.freecodecamp.org/news/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15/)

[JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)