class TimeLimitedCache {
    constructor() {
        // Map stores { key: { value, timer } }
        this.cache = new Map();
    }

    /** 
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const alreadyExists = this.cache.has(key);

        // If it exists, clear the old timeout before overwriting
        if (alreadyExists) {
            clearTimeout(this.cache.get(key).timer);
        }

        // Set a new timeout to delete the key after duration
        const timer = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timer });

        return alreadyExists;
    }

    /** 
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    /** 
     * @return {number} count of non-expired keys
     */
    count() {
        return this.cache.size;
    }
}
