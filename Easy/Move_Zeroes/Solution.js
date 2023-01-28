var moveZeroes = function (nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            temp++
            nums.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < temp; i++) {
        nums.push(0)
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))