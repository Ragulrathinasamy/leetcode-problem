/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // We use the built-in sort method with a custom comparator
    return arr.sort((a, b) => {
        // Evaluate the function for both elements
        const valA = fn(a);
        const valB = fn(b);
        
        // Return a negative value if valA < valB (a comes first)
        // Return a positive value if valA > valB (b comes first)
        return valA - valB;
    });
};
