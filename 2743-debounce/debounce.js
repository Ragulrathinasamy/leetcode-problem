/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId;

    return function(...args) {
        // 1. Clear any existing timer to cancel previous execution
        clearTimeout(timerId);

        // 2. Schedule a new execution after t milliseconds
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * Example usage:
 * const log = debounce(console.log, 100);
 * log('Hello'); // Cancelled by the next call
 * log('Hello'); // Cancelled by the next call
 * log('Hello'); // Will be executed after 100ms
 */
