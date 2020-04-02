function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo(); // constructor call

/**
 * 4 thing when new is put beofre a function
 * a. brand new object empty will be created
 * b. **this new obj will be linked to another object**
 * c. the new obj gets bound as this for the fn call
 * d. if the fun does not return anything, then the new obj will be returned by default implicitly.
 */

console.log(baz.baz);