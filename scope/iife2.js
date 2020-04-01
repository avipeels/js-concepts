var foo = "foo";

(function (bar) {
    var foo = bar;
    console.log(foo, 1);
})(foo);

console.log(foo);