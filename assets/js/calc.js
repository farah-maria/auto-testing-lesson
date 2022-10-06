/* function addition() {
    return 42;
}

module.exports = addition; */


/* NEXT PHASE

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
    }); */


function addition(num1, num2) {
    return num1 + num2;
}

module.exports = addition;