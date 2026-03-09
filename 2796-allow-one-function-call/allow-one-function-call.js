/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        // Return undefined for all subsequent calls
        return undefined;
    };
};

/**
 * Example usage logic (matches your test case):
 */
const fn = (a, b, c) => (a + b + c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
