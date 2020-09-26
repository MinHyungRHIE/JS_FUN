function calc() {
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
}

function f(callback) {
  callback();
}

// console.log("시작");
// f(calc);
// console.log("끝");

function a(fromB) {
  console.log("a()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  return fromB + 20;
}

function b(fromC) {
  console.log("b()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  return fromC + 10;
}

function c(num) {
  console.log("c()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  return num;
}
console.log("다시 시작");
console.log(a(b(c(10))));
console.log("다시 끝");

function A(fromB, callback) {
  console.log("A()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  callback(fromB + 30);
}

function B(fromC, callback) {
  console.log("B()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  A(fromC + 20, callback);
}

function C(num, callback) {
  console.log("C()");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  B(num + 10, callback);
}

console.log("다시 시작");
C(10, function (num) {
  console.log(num);
});
console.log("다시 끝");

function bar(callback) {
  callback("success call bar()");
}

function foo(a, b, callback) {
  console.log("i'm foo(), a:%s, b:%s", a, b);
  bar(callback);
}

console.log("다시 시작");
foo(1, 2, function (msg) {
  console.log(msg);
});
console.log("다시 끝");
