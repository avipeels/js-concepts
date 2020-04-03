function foo() {
    var bar = 'bar';
    setTimeout(function () {
        console.log(bar);
    }, 2000);
}
foo();