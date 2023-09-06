// Given an integer x, return true if x is a palindrome, and false otherwise.

const x = 121

function isPalindrome(x: number): boolean {
    const x_string = x.toString()
    let i = 0, j = x_string.length-1
    while ((j-- >= i++)) if (x_string[i] !== x_string[j]) return false
    return true
}

console.log(isPalindrome(2442))