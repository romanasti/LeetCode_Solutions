var getConcatenation = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums.push(nums[i])
    }
    return nums
};

console.log(getConcatenation([1,3,2,1]))