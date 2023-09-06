// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// You can return the answer in any order.

const nums = [2,7,11,15]
const target = 9

function twoSum(nums: readonly number[], target: number): number[] {
    const numMap = new Map<number, number>()
    for (let i=0; i<nums.length; i++) {
        const complement = target - nums[i]
        if (numMap.has(complement)) {
            const index = numMap.get(complement)
            if (index !== undefined) return [index, i]
        } numMap.set(nums[i], i)
    } return []
}

console.log(twoSum(nums, target))