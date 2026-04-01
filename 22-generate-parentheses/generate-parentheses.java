import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, "", 0, 0, n);
        return result;
    }

    private void backtrack(List<String> result, String current, int open, int close, int max) {
        // Base case: string is complete
        if (current.length() == max * 2) {
            result.add(current);
            return;
        }

        // Add an open bracket if we haven't reached the limit
        if (open < max) {
            backtrack(result, current + "(", open + 1, close, max);
        }
        
        // Add a closing bracket if it won't break the "well-formed" rule
        if (close < open) {
            backtrack(result, current + ")", open, close + 1, max);
        }
    }
}
