/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // A cache to store results using arguments as keys
    const cache = new Map();

    return function(...args) {
        // Create a unique key for the current arguments
        const key = JSON.stringify(args);

        // If the key exists in the cache, return the stored value
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Otherwise, call the function and store the result
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

/** 
 * Example usage:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 2) // 4
 * memoizedFn(2, 2) // 4
 * console.log(callCount) // 1 
 */
