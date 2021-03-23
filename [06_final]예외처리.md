# `[6] 예외 처리`

## 1. 예외 처리의 필요성

```js
console.log(undefined_var); //ReferenceError
console.log("다음 동작");
```
위 코드에서는 정의되어있지 않은 변수를 사용하여 에러가 발생하게되었다. 그렇게 되면 다음 스크립트 명령들은 실행되지 않게 된다.

<br><br><br><br><br>

## 2. throw문

throw문을 통해서 예외를 의도적으로 발생시킬 수 있다. 또한 의도적 예외를 발생시 어떤 객체를 돌려줄지도 정의할 수 있다.

```js
throw "Error2";   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

<br><br><br><br><br>

## 3. try~catch~finally문

try문에서 발생한 예외는 catch문을 이용해 처리할 수 있다.

```js
try{
	throw {toString: function() { return "I'm an object!"; } };
}catch(e){
	console.log(e.toString());
}
```

finally문을 통해 try~catch문의 역할이 끝나고 최종적으로 실행될 명령을 정의할 수 있다.
```js
try{
	console.log("try");
  console.log(undefined_var); //ReferenceError
}catch(e){
	console.log("catch");
  console.log(e);
}finally{
	console.log("finally");
	undefined_var = 10;
}

console.log(undefined_var); //10

/* OUTPUT
try
catch
ReferenceError: undefined_var is not defined
finally
*/
```
<br><br><br>

### - 예외처리 위임하기

```js
function errorMethod(){
	throw "Who will take it?";
}

function standardMethod(){
	errorMethod();
	return 10;
}

let result;

try{
	result = standardMethod();
}catch(e){
	console.log(e); //Who will take it?
}finally{
	console.log(result); //undefined
}
```
<br><br><br>

### - finally와 return의 관계

try 블록 코드가 무사히 수행을 마쳐서 return을 하려고 하더라도 finally를 먼저 수행한 후에 return이 수행됩니다.

```js
function tryOrFinally(){
	try{
  	console.log("try");
  	return 100;
  }catch(e){}
  finally{
		console.log("finally");
  }
}

console.log(tryOrFinally());

/* OUTPUT
try
finally
100
*/
```

finally 블록이 값을 반환하였을 경우, try 블록과 catch블록의 return 문장과 상관없이 전체 try-catch-finally 생산물의 반환값이 됩니다.

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // alerts 0, 1, 3; returns false
```