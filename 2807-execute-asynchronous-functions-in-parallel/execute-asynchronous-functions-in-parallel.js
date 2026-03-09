/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;

        // Handle empty array case immediately
        if (functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((fn, index) => {
            // Execute each function and handle the returned promise
            fn()
                .then((val) => {
                    results[index] = val;
                    resolvedCount++;

                    // If all functions have resolved, resolve the main promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // If any single promise rejects, reject the main promise immediately
                    reject(err);
                });
        });
    });
};
