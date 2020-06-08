// async function hello() {
//   return "Hello";
// }
async function hello() {
  return (greeting = await Promise.resolve("Hello"));
}

// let hello = async function() { return "Hello" };
// let hello = async () => { return "Hello" };
console.log("S================");
let x = hello()
  .then((value) => {
    return value + " World";
  })
  .then((value) => {
    console.log(value + "!");
  });
console.log(x);
console.log("E================");
