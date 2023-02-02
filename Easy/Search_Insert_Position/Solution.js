// runtime complexity 0(log n);
// Binary search

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;

    while (left < right) {
        mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(searchInsert([1, 3, 5, 6], 5))


// runtime complexity 0(n);
// var searchInsert = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//         return i
//         }
//     }
//     return nums.length
// };
//
// console.log(searchInsert([1, 3, 5, 6], 7))

