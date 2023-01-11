var lengthOfLastWord = function (s) {
    s = s.trim().split(" ");
    let res = 0;
    for (let i = 0; i < s[s.length - 1].length; i++) {
        res++
    }
    return res;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))