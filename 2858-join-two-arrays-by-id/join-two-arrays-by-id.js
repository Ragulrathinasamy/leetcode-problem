/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};

    // 1. Add all objects from arr1 to the result object
    for (const obj of arr1) {
        result[obj.id] = obj;
    }

    // 2. Merge objects from arr2
    for (const obj of arr2) {
        if (result[obj.id]) {
            // If ID exists, merge properties (arr2 overrides arr1)
            result[obj.id] = { ...result[obj.id], ...obj };
        } else {
            // If ID is new, just add it
            result[obj.id] = obj;
        }
    }

    // 3. Convert the object values back to an array and sort by id
    return Object.values(result).sort((a, b) => a.id - b.id);
};
