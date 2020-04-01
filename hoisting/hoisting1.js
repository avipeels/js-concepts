console.log(a);  //undefined
console.log(b); // undefined
var a = b; // b is undefined and is assigned to a whose value becomes undefined
var b = 2;
console.log(b); // 2
console.log(a); // 2 (wrong) - undefined (correct)