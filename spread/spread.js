/**
 * Spread operator - Uses the ... operator like the rest parameter, but when used outside the function parameter
 * list in a function definition, they will spread out the array across individual parameters.
 */

let doWork = function (...rest) {
    let result = 0;
    rest.forEach(number => {
        result += number;
    })
    return result;
}
const input = [1, 2, 3, 4, 5];

const result = doWork(...input); // spread put the input array and send it to the doWork function as a list of arguments
console.log(result);

/**
 *  Embed an array's elements in another array
 */

const array1 = [4, 5, 6];
const array2 = [1, 2, 3, ...array1, 7, 8, 9];
console.log(array2);

