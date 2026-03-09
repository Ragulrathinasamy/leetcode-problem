/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // Return the sum of the array elements when used in numeric contexts (+)
    return this.nums.reduce((sum, current) => sum + current, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Return the array as a comma-separated string surrounded by brackets
    return "[" + this.nums.join(",") + "]";
}

/**
 * Example usage:
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 */
