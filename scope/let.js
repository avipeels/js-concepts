// let - attached to block i.e. between '{' and '}', not function

function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) { // i is attached to for loop
        console.log(bar.charAt(i));
    }
    console.log(i);
}

foo();