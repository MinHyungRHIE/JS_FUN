# `[8] 문자열`

## 1. 문자열 사용법

<br><br><br><br><br>

### - 문자열 리터럴
정수 값(UTF-16 code units)의 "요소" 집합.
```js
// " " or ' '
'foo'
"bar"
```
"요소"이기에 배열처럼 인덱스로 각 문자 접근 가능
```js
let str = "Hello";
console.log(str[1]); //e
```

<br><br><br>

### - 문자열 객체
```js
var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
eval(s1); // Returns the number 4
eval(s2); // Returns the string "2 + 2"
console.log(typeof s1); // output string
console.log(typeof s2); // output object
```

`String` 객체를 사용할 필요가 없지 않는 한, String 개체는 직관에 반하는 행동을 할 수 있기 때문에 string 리터럴을 사용하는 것이 낫습니다.

<br><br><br>

### - 문자열 길이

length의 속성을 이용하면 됩니다.

```js
var browserType = 'mozilla';
browserType[browserType.length-1];
```

<br><br><br>

### - 문자열 특징
문자열은 immutable합니다.
```js
var mystring = 'Hello, World!';
var len = mystring.length;
mystring[0] = 'L'; // This has no effect, because strings are immutable
mystring[0]; // This returns "H"
console.log(len); // 13
console.log(mystring); // Hello, World!
```

<br><br><br><br><br>

## 2. 문자열 메소드

### - 문자열 찾기 활용 indexOf()
```js
var browserType = 'mozilla';
browserType.indexOf('zilla'); // 2
browserType.indexOf('vanilla'); // -1
```

<br><br><br>
 
### - 문자열 자르기 slice(), substring()
```js
var browserType = 'mozilla';
browserType.slice(0,3); // "moz"
browserType.slice(2); // "zilla"
browserType.substring(0,3); // "moz"
browserType.substring(2); // "zilla"
```

<br><br><br>

### - 대소문자 변경 toLowerCase(), toUpperCase()
```js
var radData = 'My NaMe Is MuD';
radData.toLowerCase(); // "my name is mud"
radData.toUpperCase(); // "MY NAME IS MUD"
```

<br><br><br>

### - 문자열 일부 변경 replace()
```js
var browserType = 'mozilla';
var result = browserType.replace('moz','van');
console.log(result); //vanilla
```
replace() 리턴값은 replace결과 문자열인데 만일 바뀜을 당하는 문자가 없다면 그냥 그대로 다시 리턴되고 만일 바뀜을 당하는 문자가 있다면, 바뀐 후의 문지열이 리턴된다.

<br><br><br>

### - 문자열 합치기 concat()
```js
var str1 = "Hello ";
var str2 = "World!";
var concatResult = str1.concat(str2);
console.log(str1); // "Hello "
console.log(str2); // "World!"
console.log(concatResult); // "Hello World!"
```

<br><br><br>

### - 문자열 포함 여부 startsWith(), endsWith(), includes()
```js
var str = "Javascript";
console.log(str.startsWith("j")); //false
console.log(str.endsWith("t")); //true
console.log(str.includes("rip")); //true
```
<br><br><br>

### - 문자열 분리 split()
```js
var str = "새@문자@배열을@반환합니다.";
var result = str.split("@");
console.log(str); // 새@문자열을@반환합니다.
console.log(result); // (3) ["새", "문자", "배열을", "반환합니다."]
```

<br><br><br>

### - 문자열 시작과 끝 공백 자르기 trim()

```js
var str = "       Read the report   ";
var result = str.trim();
console.log(str);
console.log(result);
```

<br><br><br>

다시 한번 말하지만 문자열은 immutable합니다. 따라서 문자열을 조작하는 어떤 메서드를 사용했을 때 원래 변수에 담겨져 있던 문자열이 조작되는 것이 아니라 조작된 문자열이 반환되므로 반환된 문자를 받아줄 변수가 필요합니다.


<br><br><br><br><br>

## 3. 템플릿 문자열

### - Template Literal
```js
var year = 2020;
var month = 07;
var day = 14;
var date = year + "년 " + month + "월 " + day +"일"
console.log(date); // 2020년 7월 14일
```
문자와 변수를 합칠 때 `+`연산을 사용하는데 좀 불편합니다.

```js
var year = 2020;
var month = 07;
var day = 14;
var date = `${year}년 ${month}월 ${day}일`;
console.log(date); // 2020년 7월 14일
```
back-tick ( ` )을 활용한 ${expression}을 통해 코드를 작성해보았습니다.
결과는 같지만 코드를 읽기 훨씬 수월합니다.

<br><br><br>

### - Multi-line Strings
오리지널
```js
console.log("string text line 1\n"+
"string text line 2");
// "string text line 1
// string text line 2"
```
템플릿 문자열 적용
```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

<br><br><br>

### - Expression Interpolation(표현식 삽입법)
오리지널
```js
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```
템플릿 문자열 적용
```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

<br><br><br>

### - Nesting Templates

동적으로 템플릿 문자열을 만들 수 있습니다.

```js
var str = "script.js"
const template = `this is ${str.endsWith('.js') ? `${str.startsWith('script') ? 'default-javascript file' : 'just javascript file'}` : 'non-javascript'}.`

template //"this is default-javascript file."
```

<br><br><br>

### - Tagged Templates

함수로도 동적으로 템플릿 문자열을 

```js
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  console.log(`배열의 크기 ${strings.length}`)
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output); // that Mike is a youngster
```

Tag function 들은 string 을 반환할 필요는  없습니다.

```js
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
```

<br><br><br>

### - Raw Strings
raw string 을 생성하기 위한 String.raw() method가 존재합니다.

이 경우에도 템플릿 문자열이 적용이 됩니다.
```js
var str = String.raw`Hi\n${2+3}!`; // "Hi\n5!"

str.length; // 6

str.split('').join(','); // "H,i,\,n,5,!"
```

<br><br><br>

### - eval()

`eval()` : 문자열로 표현된 자바스크립트 코드를 수행합니다.

```js
var str = "console.log('안녕하세요');";
eval(str); //안녕하세요
```
<br><br><br><br><br>