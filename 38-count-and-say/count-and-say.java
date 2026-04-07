class Solution {
    public String countAndSay(int n) {
        if (n <= 0) return "";
        String result = "1";
        
        // Iterate from 1 to n-1 to build the nth sequence
        for (int i = 1; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            int len = result.length();
            
            for (int j = 0; j < len; j++) {
                int count = 1;
                // Count consecutive identical characters
                while (j + 1 < len && result.charAt(j) == result.charAt(j + 1)) {
                    count++;
                    j++;
                }
                // Append "count" followed by the "digit"
                sb.append(count).append(result.charAt(j));
            }
            result = sb.toString();
        }
        
        return result;
    }
}
