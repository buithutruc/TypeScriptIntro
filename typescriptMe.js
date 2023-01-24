"use strict";
exports.__esModule = true;
//variables
var greetings = "Hello Truc"; //there's no error as in the video instruction, maybe the new version fixed that issue
greetings.toLowerCase();
console.log(greetings);
//functions
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
//objects
var User = {
    name: "truc",
    email: "truc@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "truc", isPaid: false, email: "truc@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
