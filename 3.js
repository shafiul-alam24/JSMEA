function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person("Amina", 25);
const person2 = new Person("Rahim", 30);

person1.greet();  // Hello, my name is Amina and I'm 25 years old.
person2.greet();  // Hello, my name is Rahim and I'm 30 years old.
