// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    const input = "abc";
    const shift = 3

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const expected = false;
        const actual = caesar(input, 0);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const expected = false;
        const actual = caesar(input, -26);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const expected = false;
        const actual = caesar(input, 26);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.equal(expected);
    });

    it("ignores capital letters", () => {
        const expected = "def";
        const actual = caesar("AbC",shift);
        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const expected = "cde";
        const actual = caesar("zab",shift);
        expect(actual).to.equal(expected);
    });

    it("maintans spaces and other nonalphabetic symbols in the message", () => {
        const expected = "d-ef";
        const actual = caesar("a-bc",shift);
        expect(actual).to.equal(expected);
    });
})