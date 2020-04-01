var foo = function bar() { // function expression - kind of named function expression
    var foo = "baz";

    function baz(foo){
        foo = bar;
        console.log (typeof bar);
    }
    baz();
};

foo();
bar(); // bar is not defined