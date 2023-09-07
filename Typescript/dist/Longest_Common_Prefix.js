"use strict";
// Write a function to find the longest common prefix string amongst an array 
// of strings.
// If there is no common prefix, return an empty string "".
function longestCommonPrefix(strs) {
    let result = "", current = "", position = 0;
    if ((strs.length === 1) && (strs[0][0] !== undefined))
        return strs[0][0];
    while (true) {
        for (const word of strs) {
            if (word === "")
                return "";
            if (current === "")
                current = word[position];
            else if (current !== word[position] ||
                word[position] === undefined) {
                return result;
            }
        }
        result += current;
        current = "";
        position++;
    }
}
const test_1 = ["flower", "flow", "flight"];
const test_2 = ["dog", "racecar", "car"];
const test_3 = [""];
const test_4 = ["", ""];
const test_5 = ["a"];
const test_6 = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(test_1));
console.log(longestCommonPrefix(test_2));
console.log(longestCommonPrefix(test_3));
console.log(longestCommonPrefix(test_4));
console.log(longestCommonPrefix(test_5));
console.log(longestCommonPrefix(test_6));
