function calculator() {
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  return sum;
}
console.log("START");
// console.log(calculator());
let promise = new Promise((resolve, reject) => {
  return "calculatr()";
});
promise
  .then((text) => {
    console.log(text + "실행중");
    console.log(calculator());
  })
  .catch((text) => {
    console.log(text);
  });
console.log("END");
