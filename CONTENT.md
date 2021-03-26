# `[1] Hello JavaScript : JS와의 첫만남`
## 1. 역사
## 2. ECMAScript
## 3. 엔진
## 4. 동향
## 5. JS는 ~이다.
## 6. 왜 배우는가
## 7. 실습 환경 셋팅

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[2] 변수의 기본과 자료형`

## 1. 변수란?
## 2. 세미콜론과 `=`연산
## 3. 변수 이름 짓기
## 4. 콘솔에 출력하기 : `console.log()`
## 5. 자료형이란?
## 6. 자료형의 종류
## 7. `null`과 `undefined`의 차이
## 8. 주석 활용하기
## 9. 배열 맛보기

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[3] 연산자의 기본`

## 1. 산술 연산자 `+`, `-`, `*`, `/`, `%`, `**`
### - `+`
#### * 숫자화 연산자
#### * 문자열 연산자
### - `-` 
#### * 부정 연산자
### - `*` 
### - `/` 
### - `%` 
### - `**`
## 2. 증감연산자 `++`, `--`
### - 전위연산과 후위연산
## 3. 비교 연산자 `==`, `!=`, `===`, `!==`, `>`, `>=`, `<` `<=`
## 4. 논리 연산자 `&&`, `||`, `!`
### - 효율적인 연산
## 5. 그룹 연산자 `()`
## 6. 쉼표 연산자 `,`
## 7. 비트 연산자 `&`, `|`, `^`, `~`, `<<`,`>>`,`>>>`
## 8. 할당 연산자
### - 구조 분해 할당


<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[4] 조건문과 반복문`
## 1. Block문
## 2. if문
### -  단순 if
### - if~else
### - 다수의 if (else if의 필요성)
### - else if
### - 조건식 안에 변수 값 할당
### - 거짓으로 취급되는 것
#### * NaN?
## 3. 삼항 조건문
## 4. switch~case문
## 5. for문
## 6. continue문, break문
### - continue문
### - break문
## 7. while문
### - 무한루프
## 8. do~while문
## 9. `for~in`문, `for~of`문
### - for~in문
### - for~of문
## 10. 레이블문
### - 레이블문의 break 사용 예시
### - 레이블문의 continue 사용 예시

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[5] 함수`
## 1. 함수 정의와 호출
### - 함수 선언(Function Statement)
### - 함수 표현식(Function Expression)
### - 함수 선언과 함수 표현식의 차이
## 2. 전역변수
## 3. 함수의 매개변수
## 4. arguments 객체
## 5. IIFE
## 6. 스코프와 호이스팅 `var`,`let`,`const`
### - function scope : `var`
#### * IIFE의 경우
### - block scope : `let`, `const`
#### * `var`의 문제 : 변수 재선언
#### * TDZ(Temporal Dead Zone)
#### * const의 보호 범위
## 7. 클로저(Closure)
### - 외부 함수와 내부 함수의 관계
### - 외부 변수 접근 및 변경
### - 이름 충돌
### - 클로저를 이용해 변수를 안전하게 저장하기
### - 클로저 사용시 주의해야할 점

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[6] 예외처리`
## 1. 예외 처리의 필요성
## 2. throw문
## 3. try~catch~finally문
### - 예외처리 위임하기
### - finally와 return의 관계

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[7] 배열`
## 1. 배열 선언과 생성
### - 확장 연산자
## 2. 배열 읽기
### - for문
### - forEach 함수
### - 배열의 길이
## 3. 배열 메소드
### - 함수와 메소드의 차이
### - concat() : 두 배열 합치기
### - split() : 문자열 분리
### - slice(시작, 끝) : 배열 추출
### - splice(어디 인덱스 부터, 몇개 지워?, addElement1, addElement2, ...) 
### - join() : 배열을 문자열로 변환한다.
### - reverse() : 역정렬 아님! 그냥 반대로 배치
### - sort() : 정렬
### - indexOf (searchElement [, fromIndex])
### - map(callback[, thisObject])
### - flatMap()
### - filter(callback[, thisObject])
### - every (callback [, thisObject])
### - some(callback[, thisObject])
### - reduce(callback[, initialValue])
### - push() : 배열의 끝에 추가할 item을 반드시 하나 이상 포함해야 한다는 점을 기억
### - pop() : 배열 끝 삭제
#### * unshift() <-> push()
#### * shift() <-> pop()
## 4. arguments 객체
### - 관련 문서
#### * call()과 apply()의 차이

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[8] 문자열`
## 1. 문자열 사용법
### - 문자열 리터럴
### - 문자열 객체
### - 문자열 길이
### - 문자열 특징
## 2. 문자열 메소드
### - 문자열 찾기 활용 indexOf()
### - 문자열 자르기 slice(), substring()
### - 대소문자 변경 toLowerCase(), toUpperCase()
### - 문자열 일부 변경 replace()
### - 문자열 합치기 concat()
### - 문자열 포함 여부 startsWith(), endsWith(), includes()
### - 문자열 분리 split()
### - 문자열 시작과 끝 공백 자르기 trim()
## 3. 템플릿 문자열
### - Template Literal
### - Multi-line Strings
### - Expression Interpolation(표현식 삽입법)
### - Nesting Templates
### - Tagged Templates
### - Raw Strings
### - eval()

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[9] 객체의 기본`
## 1. 객체 생성과 사용
### - 객체의 주요 키워드
### - 객체 생성
#### * 기본 객체(Object)의 생성자 함수 이용
#### * 객체 리터럴 이용
#### * 생성자 함수 이용
#### * new의 원리
### - 객체 프로퍼티 접근 방식
### - 객체 매개변수와 반환
#### * 확장연산자 활용
## 2. 프로토타입(prototype) 형식
### - 프로토타입안에 있는 것과 없는 것의 차이
### - `prototype`과 `__proto__`
### - 프로토타입 활용하기
### - Getter와 Setter
### - Delete Property
### - 효율적인 사용 : getPrototypeOf(), hasOwnProperty()
## 3. 클래스(class) 형식
### - Getter와 Setter
### - static
### - protected
### - private
## 4. 상속
### - 프로토타입형
#### * call() 함수를 이용한 부모 속성 및 메서드 인스턴스화 하기
#### * Prototype Chaining을 이용해서 상속 구현
#### * Object.create()를 이용해서 상속 구현
### - 클래스형
## 5. call(), apply(), bind()
### - call()
### - apply()
### - bind()
## 6. Object 객체
### - Object.create()
#### * Object.defineProperty()
#### * Object.defineProperties() 
### - Object.create()와 비슷한 Object.assign()
#### * 객체 복사
#### * Shallow Copy, Deep Copy
## 7. 객체 관련 연산자
### - 단항 연산자 `delete`, `typeof`, `void`
### - 관계 연산자 `in`, `instanceof`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[10] 객체의 심화`
## 1. Primitive Type, Reference Type
## 2. Shallow Copy, Deep Copy
## 3. Pure 메소드, Impure 메소드
## 4. Wrapper 클래스
### - Number
### - String
### - Boolean
### - Symbol
## 5. 타입 제대로 확인하기
## 6. JSON
## 7. 화살표 함수
## 8. use strict
## 폴리필

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[11] 컬렉션`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[12] 반복자와 제너레이터`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[13] 모듈`


<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[14] 날짜다루기`


<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[15] 비동기적인 JavaScript 활용`

## 1. JS 메모리
## 2. setInterval(), setTimeout()
## 3. 콜백 함수(Callback)
## 4. 프로미스(Promise)
## 5. Async/Await

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[16] 정규표현식`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[16] 함수형 프로그래밍과 RxJS`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `[17] DOM 제어`

<br><br><br><br><br>
<hr>
<br><br><br><br><br>

# `추가 및 고려해야할 것`
## Infinity 객체
## Class and Factory

class는 ES6(ECMAScript 2015)에서 추가된 문법

[JavaScript Factory functions vs Constructor functions.](https://medium.com/@chamikakasun/javascript-factory-functions-vs-constructor-functions-585919818afe)

[Class vs Factory function: exploring the way forward](https://www.freecodecamp.org/news/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15/)

[JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)