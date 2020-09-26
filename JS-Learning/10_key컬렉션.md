# Key컬렉션

곧 객체를 배우겠지만 객체는 

## Map

아래 샘플 코드를 보면 어떻게 쓰이는지 쉽게 알 수 있다.
```js
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"
```

## Set
이 자료구조 역시 아래 코드로 설명이 가능
```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```
<br><br>

### Set을 배열로, 배열을 Set으로
```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

/* Set --> 배열 */
Array.from(mySet);
[...mySet2]; //전개 구문(spread operator)

/* 배열 --> Set */
mySet2 = new Set([1,2,3,4]);
```
 Set객체는 중복된 값을 저장하지 않기때문에 주어진 배열내의 중복된 요소들을 제거되어 Set으로 변환된다

<br><br>

#### 전개 구문이란?
전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있음
```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```
 - 전개구문으로 배열 연결

우리가 배열에서 배운 배열 연결법
```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr2 의 모든 항목을 arr1 에 붙임
arr1 = arr1.concat(arr2); //(6) [0, 1, 2, 3, 4, 5]
```
전개 구문사용
```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 은 이제 [0, 1, 2, 3, 4, 5]
```

## WeakMap과 WeakSet
 - 이런게 있다는것만 개념만 알고있자.
 - 나도 잘 모름...
