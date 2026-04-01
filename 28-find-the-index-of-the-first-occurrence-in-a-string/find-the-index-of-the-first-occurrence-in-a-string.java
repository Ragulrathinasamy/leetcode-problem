class Solution {
    public int strStr(String haystack, String needle) {
        int n = haystack.length();
        int m = needle.length();

        // If needle is longer than haystack, it can't be found
        if (n < m) {
            return -1;
        }

        // Slide the window of length 'm' across 'haystack'
        for (int i = 0; i <= n - m; i++) {
            // Check if the substring starting at i matches needle
            if (haystack.substring(i, i + m).equals(needle)) {
                return i;
            }
        }

        return -1;
    }
}
