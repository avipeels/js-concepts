var foo;

try {
    foo.length;
} catch (err) {
    console.log(err);
};

console.log(err); // err is not defined