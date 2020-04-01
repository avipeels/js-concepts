var foo = "baz";

function bar() { // function declaration

    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar();
console.log(foo); // "baz"
console.log(bam); // "yay"
baz(); // Error : baz not defined