/**
 * Before even reaching to 1st line these are the things available:
 * 1. An Object - function called Object
 * 2. there is an object - where 1 points to 
 * 3. The name of it is called Object.prototype => toString()..... etc
 */

/**
 * 1. foo is an function called foo
 * 2. It creates an object that it is linked to called foo.prototype
 * 3. This object has a prop on it called foo.contructor 
 */
function foo(who) {
    this.me = who;
}
/**
 * it creates a method called identity over the foo.prototype
 */
foo.prototype.identify = function () {
    return 'I am' + this.me;
}

//brand new object
var a1 = new foo('a1'); // this is a1; 
var a2 = new foo('a2'); // this is a2

a2.speak = function () {
    alert('hello, ' + this.identify() + '.');
}

console.log(a1.constructor);
console.log(a1.constructor === foo);
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === foo.prototype);
console.log(a1.__proto__ === a2.__proto__);

console.log(a1.__proto__ === Object.getPrototypeOf(a1));
console.log(a1.__proto__ === a2.constructor.prototype);
console.log(a1.__proto__ === a2.constructor.prototype);
