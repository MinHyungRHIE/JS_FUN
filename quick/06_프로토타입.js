// Javascript is prototype-based language
// prototype chain : 모든 객체들은 메소드와 속성을 받기위한 템플릿
// 상속되는 속성과 메소드들은ㅇ 각 객체가 아니라 객체의 생성자의 prototype이라는 속성에 정의되어 있음
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log("Hi! " + this.name + "[" + this.age + "]");
  };
}

person1 = new Person("RHIE", 28);
console.log(person1.valueOf());
console.log(Object.getPrototypeOf(person1));
console.log(person1.constructor);
person2 = new person1.constructor("KAKA", 27);
console.log(person2.valueOf());

Person.prototype.example = function () {
  console.log("모든 객체에 공유됨");
};

console.log(person1.valueOf());
