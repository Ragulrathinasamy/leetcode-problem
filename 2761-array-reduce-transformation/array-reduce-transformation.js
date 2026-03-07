/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    
    for (let i = 0; i < nums.length; i++) {
        // The new value becomes the result of the function applied 
        // to the current accumulator and the current array element
        val = fn(val, nums[i]);
    }
    
    return val;
};
