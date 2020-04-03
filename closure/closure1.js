function foo() {
    var bar = "bar";
    function baz() {            // baz scope starts.......
        console.log(bar);
    }                           //baz scope ends..........
    bam(baz);
    function bam(baz) {
        baz(); // baz is sent as param and gets called outside its lexical scope
    }
}
foo();
