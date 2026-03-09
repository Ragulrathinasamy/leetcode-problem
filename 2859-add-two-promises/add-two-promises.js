/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Promise.all executes both promises concurrently
    const [val1, val2] = await Promise.all([promise1, promise2]);
    
    // Return the sum
    return val1 + val2;
};

/**
 * Example usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
