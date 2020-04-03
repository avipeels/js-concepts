function foo() {
    var bar = 0;
    setTimeout(() => {
        var baz = 1;
        console.log(bar++);
        setTimeout(() => {
            console.log(bar + baz);
        }, 200);
    }, 100);
}
foo();