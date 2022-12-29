const twoSum = function(nums, target) {
let storage = new Map();
    for (let i = 0; i < nums.length ; i++) {
        let num = target - nums[i];     // 9 - 2 === 7
        if(storage.has(num)) {          // we check if there is a key
            return [storage.get(num),i] // we get the value based on the key
        } else {
            storage.set(nums[i],i)      // set the key-value pair
            console.log(storage)
        }
    }
};

console.log(twoSum([2,7,11,15], 9))