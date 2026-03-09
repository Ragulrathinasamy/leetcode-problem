/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Initialise an empty object to store the groups
    const result = {};

    for (const item of this) {
        // Generate the key using the provided function
        const key = fn(item);

        // If the key doesn't exist yet, initialise it with an empty array
        if (!(key in result)) {
            result[key] = [];
        }

        // Push the current item into the appropriate group
        result[key].push(item);
    }

    return result;
};

/**
 * Example usage:
 * [1,2,3].groupBy(String) // {"1":[1], "2":[2], "3":[3]}
 */
