var a = b();
var c = d(); // at this point, the execution stops hence does not print the below lines

console.log(a);
console.log(c);

function b(){
    return c;
}

var d = function(){
    return b();
}