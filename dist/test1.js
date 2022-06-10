"use strict";

var f = function f(a, b, c) {
    console.log("abc", a, b, c);
};
console.log(f);
setTimeout(function () {
    console.log("小李子");
}, 500);