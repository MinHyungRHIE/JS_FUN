# `[6] 배열`

<br><br><br><br><br>


## 1. 배열 선언과 생성

기본적인 배열 생성은 아래와 같다.
```js
var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];
var arr = Array.of(element0, element1, ..., elementN)
```

길이를 지정하여 배열생성하는 방법은 아래와 같다.

```js
var arrayLength = 5;
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;

// This one doesn't work
var arr = [42];
console.log(arr.length); //1
```

<br><br><br>

### - 확장 연산자

```js
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

//[ 'head', 'shoulders', 'knees', 'and', 'toes' ]
```

위와 같이, 확산연산자의 함수 호출은 다음과 같이 사용합니다.
```js
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```
<br><br><br><br><br>

## 2. 배열 읽기

### - for문
```js
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

### - forEach 함수
```js
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
```

파라미터가 하나더 늘어가게되면 index가 리턴이 된다.


```js
let myArr = [10, 20, 30, 40, 50];

myArr.forEach(function(item ,index){
	console.log(item, index)
});
/* OUTPUT
  10 0
  20 1
  30 2
  40 3
  50 4
 */

let myObj = [
	{
  	"name":"rhie",
    "age": 30
  },
  {
		"name":"son",
    "age": 40
  
  },
  {
		"name":"okka",
    "age": 20
  
  }
]

myObj.forEach(function(item ,index){
	console.log(item, index)
});
/* OUTPUT
 {name: "rhie", age: 30} 0
 {name: "son", age: 40} 1
 {name: "okka", age: 20} 2
 */
```

<br><br><br>

### - 배열의 길이

```js
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
```
이런식으로 인덱스로 값을 넣을 위치를 지정해주고 그에 따른 값을 명시해주면 된다.

주의해야할 점은 양의 정수이여야만 한다.

```js
var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
배열을 생성함과 동시에 배열에 값을 저장할 수 있습니다. 
```

배열 메서드도 요소 참조 가능하다.
```js
var arr = ['one', 'two', 'three'];
arr[2];  // three
arr["length"];  // 3
```

배열 길이는 조심히 다뤄야한다.
```js
var cats = [];
cats[5] = ['Dusty'];
console.log(cats.length); // 6
```
앞 공간들은 empty!

배열 길이를 줄이고 다시 늘리면 길이가 줄어든 자리의 원래값은 사라지고 empty로 채워지게 된다.

```js
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items ]
```

<br><br><br><br><br>

## 3. 배열 메소드
### - 함수와 메소드의 차이
갑자기 함수가아닌 메소드(Method)라는 이름이 나왔다. 자바스크립트에서 함수는 자바스크립트 내장 객체인 Function 생성자로 생성된 객체이다.
자바스크립트의 함수는 값으로 취급된다. 

Function 내장 객체로 생성된 함수 객체가 프로퍼티가 될 때 이를 메소드라고 부른다.

메소드는 .앞의 객체에 this를 바인딩한다.

즉, 함수는 객체로부터 독립적이며, 메소드는 객체에 종속적이다.

[관련 stackoverflow](https://stackoverflow.com/questions/155609/whats-the-difference-between-a-method-and-a-function)

<br><br><br>

### - concat() : 두 배열 합치기
```js
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c'); 
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

<br><br><br>

### - split() : 문자열 분리
```js
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
myArray;
// (6) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```

<br><br><br>

### - slice(시작, 끝) : 배열 추출
새로운 배열로 받는다.
```js
var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // until index 3, returning ["b", "c", "d"]
```
                               
<br><br><br>

### - splice(어디 인덱스 부터, 몇개 지워?, addElement1, addElement2, ...) 
```js
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd'); //["1", "a", "b", "c", "d", "5"]
```

<br><br><br>

### - join() : 배열을 문자열로 변환한다.
- join(delimiter = ',')

```js
var myNewString = myArray.join();
myNewString;
var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
```

배열을 문자열로 변환하는 또 다른 방법은 **`toString()`** 를 사용하는 것
```js
var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
```

<br><br><br>

### - reverse() : 역정렬 아님! 그냥 반대로 배치

```js
var myArray = new Array('1', '3', '2');
myArray.reverse(); 
myArray; // (3) ["2", "3", "1"]
```

<br><br><br>

### - sort() : 정렬
```js
var myArray = [3, 6, 1, 10, 2];
myArray.sort(); 
myArray // (5) [1, 10, 2, 3, 6]
```
잠깐... 우리가 원하는 결과는 아래와 같다.
```console
(5) [1, 2, 3, 6, 10]
```
콜백함수를 사용해야 한다. 콜백함수? 일단은 sort() 메서드의 인자값으로 함수를 줘야한다는 것만 알아두자.

```js
var myArray = [3, 6, 1, 10, 2, 14, 103];
var sortNumber = function(n1, n2){
    if(n1 > n2) return 1;
    if(n1 < n2) return -1;
    if(n1 == n2) return 0;
}
myArray.sort(sortNumber); 
myArray; // (7) [1, 2, 3, 6, 10, 14, 103]
```

<br><br><br>

### - indexOf (searchElement [, fromIndex])
 배열에서 searchElement를 검색하고 첫 번째 일치 항목의 인덱스를 반환
```js
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
```
<br><br><br>

### - map(callback[, thisObject])
배열의 모든 요소에 대해 콜백함수를 실행하고 콜백함수의 실행결과를 새로운 배열에 담아 반환
```js
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs ['A', 'B', 'C']
```

<br><br><br>

### - flatMap()

1 level 더 평탄화 시켜줍니다.

```js
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 한 레벨만 평탄화됨
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

또 다른 예제입니다.

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x=>x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in","California"]
```

<br><br><br>

### - filter(callback[, thisObject])
배열의 모든 요소에 대해 콜백 함수가 true를 반환하는 요소를 새로운 배열에 담아 반환 
```js
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
console.log(a2); // logs ['10', '20', '30']
```

<br><br><br>

### - every (callback [, thisObject])
콜백이 배열의 모든 항목에 대해 true를 반환하면 true를 반환
```js
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false
```

<br><br><br>

### - some(callback[, thisObject])
배열의 모든 요소에 대해 콜백 함수를 실행하고 하나의 요소라도 콜백 함수의 결과가 true이면 some()메서드의 결과는 true
```js
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false
```

<br><br><br>

### - reduce(callback[, initialValue])
배열내의 요소를 하나의 요소로 줄이기 위해 firstValue, secondValue를 인자로 받는 콜백 함수를 실행
```js
var a = [10, 20, 30, 40, 50];
var total = a.reduce(function(first, second) { return first + second; }, 100);
console.log(total) // Prints 250
```
 - reduceRight(callback[, initalvalue]) 메서드는 반대로 진행

<br><br><br>

### - push() : 배열의 끝에 추가할 item을 반드시 하나 이상 포함해야 한다는 점을 기억
```js
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
```

<br><br><br>

### - pop() : 배열 끝 삭제
```js
var myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
myArray.pop()
//return "Carlisle"
myArray
// (5) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds"]
```

*그러면 배열의 제일 처음 부분 item 추가/제거는?*

#### * unshift() <-> push()
```js
myArray.unshift('Edinburgh');
myArray;
```
#### * shift() <-> pop()
```js
myArray.shift();
```

<br><br><br><br><br>

## 4. arguments 객체

```js
function printArray(){
  Array.prototype.forEach.call(arguments, function(item) { 
    console.log(item); 
  });
}
printArray("Hahaha", "React React", "JS OMG");
```
지난 함수 매개변수 컨트롤 방법을 공부할 때 arguments 객체는 배열을 흉내낼 뿐, 배열 객체가 아니라고 말했다. 즉, forEach() 메소드가 없다.

그럴 때 Array의 프로토타입(나중에 배울것이다.)에 정의된 메서드에 있는 forEach()를 가져와 call()을 통해 실행하는 것이다.

call()은 Function의 프로토타입에 정의되어 있는 메서드이다.

### - 관련 문서

 - [arguments 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

 - [Function.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

 - [Function.apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

#### * call()과 apply()의 차이
 - call() : `call(this||arguments, arg1, arg2, arg3, arg4...)`처럼 인수 목록을 받는다.
 - apply() : `apply(this||arguments, 배열)`처럼 인수들의 단일 배열을 받는다.

 ```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
 ```

참고로 `Function.arguments`는 **Deprecated**되었으니 Function을 통해 사용하지 말자