var foo = (function () { // module
    var o = { bar: 'bar' };
    return {
        bar: function () {
            console.log(o.bar);
        }
    };
})();

foo.bar();