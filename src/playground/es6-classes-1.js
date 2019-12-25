class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name
    this.age = age
  }
  getGreeting(){
    return 'Hi. I am ' + this.name + '!'
  }

  getDescription(){
    return `Hi, I am ${this.name} and I am ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major; 
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()) {
      return description += `Their major is ${this.major}.`
    };

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation  = homeLocation;
  }

  getGreeting(){
    if(this.homeLocation) {
      console.log('ran once');
      return `Hi, I am ${this.name}.  I am from ${this.homeLocation}.`
    }
    console.log('bottom ran');
    return `Hi, I am ${this.name}.`
  }
}

const me = new Traveler ('Andrew Mead',26,'Philedelphia');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());