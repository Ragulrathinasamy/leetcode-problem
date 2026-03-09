/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];
    
    // Iterate through the array, incrementing by 'size' each time
    for (let i = 0; i < arr.length; i += size) {
        // slice(i, i + size) extracts elements from index i up to (but not including) i + size
        chunkedArray.push(arr.slice(i, i + size));
    }
    
    return chunkedArray;
};
