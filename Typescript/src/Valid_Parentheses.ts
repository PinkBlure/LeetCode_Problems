// Given a string s containing just the characters '(', ')', '{', '}', 
// '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     1. Open brackets must be closed by the same type of brackets.
//     2. Open brackets must be closed in the correct order.
//     3. Every close bracket has a corresponding open bracket of the same 
//        type.

function isValid(s: string): boolean {
    const parenthesisMap = new Map<string, string>([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])
    let buffer: string[] = []
    for (const char of s) {
        if (Array.from(parenthesisMap.keys()).includes(char)) buffer.push(char)
        else {
            const current = 
            Array.from(parenthesisMap.entries()).find(([clave, valor]) => 
            valor === char) ?? ""
            if (buffer[buffer.length-1] === current[0]) buffer.pop()
            else return false
        }
    } return buffer.length === 0
}

console.log(`() = ${isValid("()")}`)
console.log(`()[]{} = ${isValid("()[]{}")}`)
console.log(`(] = ${isValid("(]")}`)
console.log(`{[]} = ${isValid("{[]}")}`)
console.log(`([)] = ${isValid("([)]")}`)
console.log(`( = ${isValid("(")}`)
console.log(`[([]]) = ${isValid("[([]])")}`)
