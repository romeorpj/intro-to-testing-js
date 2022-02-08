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
    // it("should return a string when called", () => {
    //     expect(typeof sayHello()).toBe('string')
    // });
    // it("should return a 'A random string' when called", ()=>  {
    //     expect(sayHello()).toBe("A random string")
    // });
    // it("should return a short string", () => {
    //     expect(typeof sayHello()).toBe("string");
    // })
it("Should return 'Hello Jane",()=>{
    expect(sayHello("Jane")).toBe("Hello Jane")
})
    it("Should return 'Hello Alex",()=>{
        expect(sayHello("Alex")).toBe("Hello Alex")
    })
})




