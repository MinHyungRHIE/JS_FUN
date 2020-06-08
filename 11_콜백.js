function A() {
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  console.log("AAA");
}

function B() {
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  console.log("CCC");
}

console.log("START");
A();
B();
console.log("END");
// #1
console.log("Hello");
// #2
setTimeout(function () {
  console.log("Bye");
}, 3000);
// #3
console.log("Hello Again");
