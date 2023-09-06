"use strict";
// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.
// You can return the answer in any order.
let nums = [2, 7, 11, 15];
let target = 9;
function twoSum(nums, target) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            let index = numMap.get(complement);
            if (index !== undefined)
                return [index, i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}
console.log(twoSum(nums, target));
