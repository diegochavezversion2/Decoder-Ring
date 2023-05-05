// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    const input = "hello";
    const realAlphabet= "abcdefghijklmnopqrstuvwxyz";
    const alphabetKey = "qwertyuiopasdfghjklzxcvbnm";
    it("should return false if the given alphabet isnt exactly 26 characters long", () => {
        const alphabet = "abc";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should correctly translate the given phrase, based on the alphabet given", () => {
        const expected = "itssg";
        const actual = substitution(input, alphabetKey);
        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const alphabet = "qwwrtyuiopasdfghjklzxcvbnm";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
        const customInput = "hello world"
        const expected = "itssg vgksr";
        const actual = substitution(customInput, alphabetKey);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const customInput = "Hello"
        const expected = "itssg";
        const actual = substitution(customInput, alphabetKey);
        expect(actual).to.equal(expected);
    });
})
