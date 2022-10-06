"use strict";
class Person123 {
    hello() {
        console.log(`안녕하세요!`, Person123.CITY);
    }
}
Person123.CITY = 'seoul';
const p12 = new Person123();
p12.hello();
// Static 
/*
  클래스에 바로직접접근
  Person.hello();
*/
