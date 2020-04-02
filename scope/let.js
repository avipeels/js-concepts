// let - attached to block i.e. between '{' and '}', not function
// Difference between let and var - let is block level scoped and var is function level scoped
function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) { // i is attached to for loop
        console.log(bar.charAt(i));
    }
    console.log(i);
}

foo();

