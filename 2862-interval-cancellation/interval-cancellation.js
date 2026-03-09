/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // 1. Call the function immediately as per requirements
    fn(...args);

    // 2. Set up the recurring interval
    const timerId = setInterval(() => {
        fn(...args);
    }, t);

    // 3. Return the cancel function to stop the interval
    return function cancelFn() {
        clearInterval(timerId);
    };
};
