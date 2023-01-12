var missingNumber = function(nums) {
    let len = nums.length
    let form = len * (len+1) / 2
    let sum = nums.reduce((a, b) => a + b, 0)
    return form - sum
};

console.log(missingNumber([3,0,1]))
