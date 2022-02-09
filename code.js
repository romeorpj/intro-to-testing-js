// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if(input === true || input === false){
        return "Hello World";
    }else if(input === null || input === ""){
        return "empty input is not allowed"

    }else if(typeof input === "number"){
        return `${input} is a number`
    }
    else{
        return `Hello ${input}`;
    }

}
