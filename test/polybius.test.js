// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {

    it("should translate the letters i and j to 42 when encoding", () => {
        const expected = "324242";
        const actual = polybius("hij");
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to i/j when decoding", () => {
        const expected = "h(i/j)(i/j)";
        const actual = polybius("324242", false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "112131";
        const actual = polybius("aBc");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after encoding", () => {
        const expected = "1121 31";
        const actual = polybius("ab c");
        expect(actual).to.equal(expected);
    });
})