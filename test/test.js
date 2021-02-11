let assert = require("assert");
let phrase = require("../index.js");

describe("Phrase", function() {

	describe("#palindrome", function (){

		it("should return false for a non-palindrome", function() {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});

		it("should return true fora  plain palindrome", function() {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
	});
});