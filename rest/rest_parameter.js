/**
 * rest parameter - collect the params and pack to an array so that they can be used with ... operator in the 
 * function definition. They should be the last parameter because they gobble up all the remaining parameters
 * 
 * Rest is used inside the function parameter list in the function definition
 */

let doWork = function (name, ...numbers) {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    })
    return result;
}
let result = doWork('Avinash', 1, 2, 3);
console.log(result);