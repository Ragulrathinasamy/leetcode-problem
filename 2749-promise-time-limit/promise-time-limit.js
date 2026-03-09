/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Use Promise.race to return the result of the first promise to settle
        // Either the original fn completes, or the timer rejects.
        return Promise.race([
            fn(...args),
            timeoutPromise
        ]);
    };
};

/**
 * Example usage:
 * const limited = timeLimit(async (n) => n * n, 100);
 * limited(5).then(console.log).catch(console.log);
 */
