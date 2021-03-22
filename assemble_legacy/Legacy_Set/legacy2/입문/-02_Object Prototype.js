/** 프로토타입 상속 **/
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  function greeting() {
    console.log("Hello");
  }
}

Person.prototype.x = function () {
  console.log("prototype.x of Person");
};

function Teacher(name, age, gender, subject) {
  Person.call(this);
}
