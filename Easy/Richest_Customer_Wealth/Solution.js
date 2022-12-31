var maximumWealth = function (accounts) {
    let sum = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j]
        }
        sum = Math.max(sum,temp)
    }
    return sum
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))

