var foo = (function (){
    var publicAPI = { // if we want to add or rmeove from api it can be done using publicAPI.
        bar: function(){
            publicAPI.baz();
        },
        baz: function(){
            console.log('baz');
        }
    };
    return publicAPI;
})();

foo.bar();