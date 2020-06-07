/** 프로토타입 기본 **/
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  function greeting() {
    console.log("Hello");
  }
}

Person.prototype.x = function protoTester() {
  console.log("prototype test");
};

p1 = new Person("RHIE", 28, "MALE");

p1_value = p1.valueOf(); // 호출된 객체의 값을 단순 반환합니다.
console.log(p1_value);
p1_proto = Object.getPrototypeOf(p1); // 프로토타입 정보를 받습니다.
console.log(p1_proto);
console.log(Person.prototype);
