/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // If n is 0, no flattening occurs, return a copy of the array
    if (n === 0) return arr;

    const result = [];

    // Helper function to handle recursion
    const flatten = (currentArr, currentDepth) => {
        for (const item of currentArr) {
            // Check if item is an array AND we haven't reached depth n
            if (Array.isArray(item) && currentDepth < n) {
                // Recursively call with incremented depth
                flatten(item, currentDepth + 1);
            } else {
                // Otherwise, push the item (primitive or unflattened array)
                result.push(item);
            }
        }
    };

    flatten(arr, 0);
    return result;
};
