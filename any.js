"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
