function foo() {                // outer function
    var bar = "bar";
    function baz() {            // baz scope starts....... inner function
        console.log(bar);
    }                           //baz scope ends..........
    bam(baz);                   // function can be passed around - they are first class object
    function bam(baz) {
        baz();                  // baz is sent as param and gets called outside its lexical scope
    }
}
foo();
