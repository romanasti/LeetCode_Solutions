var findDuplicates = function (nums) {
    let res = [];
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? res.push(nums[i]) : obj[nums[i]] = 1
    }
    return res
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))