function foo() {
    var bar = 'bar';
    $('#btn').click(function (event) {
        console.log(bar);
    });
}
foo();