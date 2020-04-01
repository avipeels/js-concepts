// Hoistings - functions first and take priority

foo();

var foo = 2; // this will simply get ignored. 

function foo() {
    console.log("bar");
}

function foo() {
    console.log("foo");
}