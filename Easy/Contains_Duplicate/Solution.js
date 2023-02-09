var containsDuplicate = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]){
            return true
        } else {
            obj[nums[i]] = 1
        }
    }
    return false;
};

console.log(containsDuplicate([2,14,18,22,22]))