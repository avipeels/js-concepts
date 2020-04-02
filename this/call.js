function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar" };

foo();
foo.call(obj);