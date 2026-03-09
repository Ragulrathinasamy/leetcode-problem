/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // For arrays, simply check the length property
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // For objects, get an array of keys and check its length
    return Object.keys(obj).length === 0;
};
