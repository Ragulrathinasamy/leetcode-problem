/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let bestIndex = -1;
    let minCap = Infinity;

    for (let i = 0; i < capacity.length; i++) {
        const currentCap = capacity[i];
        
        // Step 1: Check if the box can hold the item
        if (currentCap >= itemSize) {
            // Step 2: Check if this capacity is smaller than our best found so far
            if (currentCap < minCap) {
                minCap = currentCap;
                bestIndex = i;
            }
            // Note: We don't need an 'else if (currentCap === minCap)' 
            // because we want the smallest index, which we already found.
        }
    }

    return bestIndex;
};
