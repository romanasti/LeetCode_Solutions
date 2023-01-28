var removeDuplicates = function(nums) {
if (nums.length === 0) {return 0};
let j = 1;
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[j] = nums[i+1]
            j++
        }
    }
    return j
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// another solution
// const arr1 = [0,0,1,1,1,2,2,3,3,4]
//
// let removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] === nums[i-1]) {
//             nums.splice(i,1)
//             i--
//         }
//     }
//     return nums.length
// }
//
// console.log(removeDuplicates(arr1))
// console.log(arr1)
