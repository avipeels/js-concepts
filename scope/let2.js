let name = "Avi-outer";
function printLastName() {
    const name = 'Peelukhana-inner';
    name = 'sai';
    console.log(name);
    if (true) {
        let name = 'Avi-inner';
        console.log(name);
    }
}

printLastName();
console.log(name);