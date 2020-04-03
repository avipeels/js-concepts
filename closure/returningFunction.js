function foo() {
    var bar = 'bar';
    return function () { // returns a function
        console.log(bar);
    };
}

function bam() {
    foo()(); // first () will get the function and secnd () will execute it. That time it will stil be able to access bar.
}

bam();