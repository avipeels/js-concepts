function foo() {
    var bar = 0;
    setTimeout(function () {
        bar++;
        console.log(bar);
    },100);
    setTimeout(function () {
        bar++;
        console.log(bar);
    },200);
}
foo();