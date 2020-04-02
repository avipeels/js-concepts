function bind(fn, o) {
    return function () {
        fn.call(o);
    }
}

function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

var orig = foo;

foo = bind(foo, obj);

foo();
foo.call(obj2);