function isEven(input3) {
    if (input3 % 2 === 0) {
        return true;
    }
    else if (input3 % 2 !== 0) {
        return false;
    } else if(typeof input3 === "boolean") {
        return false;
    }
}


function isFive(input2) {
    if (input2 === 5 || parseInt(input2) === 5) {
        return true;
    } else {
        return Boolean(input2);
    }
}

// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === true || input === false) {
        return "Hello World";
    } else if (input === null || input === "") {
        return "empty input is not allowed"
    } else if (typeof input === "number") {
        return `${input} is a number`
    } else {
        return `Hello ${input}`;
    }
}
