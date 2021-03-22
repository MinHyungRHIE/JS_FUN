var person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.interests[1]);
x = "first";
console.log(person.name[x]);
console.log(person["name"][x]);

person.greeting();

var obj = {
  a: 10,
};
console.log("obj.a", obj.a); //10
var copyObj = obj;
copyObj.a = 20;
console.log("obj.a", obj.a); //20
console.log("copyObj.a", copyObj.a); //20
var deepCopyObj = Object.assign({}, obj);
deepCopyObj.a = 30;
console.log("obj.a", obj.a); //20
console.log("deepCopyObj.a", deepCopyObj.a); //30

var person1 = {
  name: "Chris",
  greeting: function () {
    console.log("Hi! I'm " + this.name + ".");
  },
};

var person2 = {
  name: "Brian",
  greeting: function () {
    console.log("Hi! I'm " + this.name + ".");
  },
};

console.log(person1.name);
console.log(person2.name);
person1.greeting();
person2.greeting();

function Person(name) {
  this.name = name;
  this.greeting = function () {
    console.log("Hi! " + name);
  };
}

var person = new Person("Sarah");
person.greeting();

// Object 생성자 방법 1
var person1 = new Object();
person1.name = "Chris";
person1["age"] = 38;
person1.greeting = function () {
  console.log("Hi! " + this.name + "[" + this.age + "]");
};

// Object 생성자 방법 2
var person2 = new Object({
  name: "Chris",
  age: 38,
  greeting: function () {
    console.log("Hello! " + this.name + "[" + this.age + "]");
  },
});

person1.greeting();
person2.greeting();
