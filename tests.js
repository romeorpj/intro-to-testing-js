// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


//sayHello Function test
describe("sayHello", () => {
    it("should be a defined function", () => {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", () => {
        expect(typeof sayHello("")).toBe('string')
    });
    it("Should return 'Hello Jane", () => {
        expect(sayHello("Jane")).toBe("Hello Jane")
    })
    it("Should return 'Hello Alex", () => {
        expect(sayHello("Alex")).toBe("Hello Alex")
    })
    it("Should return 'Hello, Pat", () => {
        expect(sayHello("Pat")).toBe("Hello Pat")
    })
    it("Should return 'Hello World'", () => {
        expect(sayHello("World")).toBe("Hello World")
    })
    it("Should return boolean true", () => {
        expect(sayHello(true)).toBe(("Hello World"))
    })
    it('should return boolean false', () => {
        expect(sayHello(false)).toBe("Hello World")
    });
    it(`should return empty input is not allowed`, () => {
        expect(sayHello(null)).toBe("empty input is not allowed")
    });
    it(`Should return empty input is not allowed`, () => {
        expect(sayHello("")).toBe("empty input is not allowed")
    })
    it("Should return a number or a float", () => {
        expect(sayHello(5.5)).toBe(`${5.5} is a number`)
    })
    // it("Should return true if string is a number",()=>{
    //     expect(sayHello("6")).toBe(true)
    // })
})


describe("isFive", () => {
    it('should be a function', () => {
        expect(typeof isFive).toBe("function")
    });
    it("Should return a boolean no matter the input, even if input is empty",()=>{
        expect(typeof isFive(5)).toBe("boolean")
    })
    it("should return true if input2 is the number 5",()=>{
        expect(isFive(5)).toBe(true)
    })
    it("should convert string 5 to number 5 and return true",()=>{
        expect(isFive("5")).toBe(true)
    })
})

