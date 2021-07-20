const person = {
    name : "Rhie",
    age : 28,

    get info(){
        return `${this.name} : ${this.age}`
    },

    set info(infoObj){
        this.name = infoObj.name??this.name;
        this.age = infoObj.age??this.age;
    }
}

console.log(person.info); // Rhie : 28
person.info={
    name : "Eddie"
}
console.log(person.info); // Eddie : 28