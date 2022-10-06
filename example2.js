"use strict";
class Person345 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Mark';
        this.country = 'Korea';
        this.country = "korea";
    }
    hello() {
        this.country = "china";
    }
}
const p13 = new Person345("Mark", 39);
console.log(p13.name); //get을 하는 함수 getter
p13.name = "Sumin"; //Set을 하는 함수 
console.log(p13.name);
