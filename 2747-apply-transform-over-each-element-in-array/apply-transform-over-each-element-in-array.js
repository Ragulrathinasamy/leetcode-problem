/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Pass both the element and the index to the mapping function
        returnedArray[i] = fn(arr[i], i);
    }
    
    return returnedArray;
};
