var findDisappearedNumbers = function(nums) {
    let res = [];
    let set = new Set();
    for (const num of nums) {
        if(!set.has(num)) {
            set.add(num)
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            res.push(i)
        }
    }
    return res
};

console.log(findDisappearedNumbers([1,1]))