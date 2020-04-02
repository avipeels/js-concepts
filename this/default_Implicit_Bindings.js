// every function while executing has a reference to it current execution context call this

// implicit or default binding

function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

// default binding - either window or containing global object will be this
foo(); // bar1 

// implicit binding - object with which we call the function will be this
o2.foo(); // bar2 - call site is o2 , so o2 becomes this
o3.foo(); // bar3 - call site is o3