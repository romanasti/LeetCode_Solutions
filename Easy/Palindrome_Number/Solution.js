function isPalindrome(x) {
    if (x === 0) return true
    if (x % 10 === 0) return false

    let temp = 0;
    while (x > temp) {
        temp *= 10
        temp += x % 10
        x = Math.trunc(x / 10)
    }
    return (x === temp) || (x === Math.trunc(temp / 10))
}

console.log(isPalindrome(-121))


// another solution
// by converting to a string

// function isPalindrome(x) {
//     x = String(x)
//     let str = x.substring(x.length / 2 + 1, x.length).split("").reverse().join("")
//     return (x.substring(0, x.length / 2) === str)
// }
// console.log(isPalindrome(1234321))




