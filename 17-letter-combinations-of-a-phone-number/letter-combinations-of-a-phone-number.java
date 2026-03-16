import java.util.ArrayList;
import java.util.List;
import java.util.Map;

class Solution {
    // Mapping of digits to corresponding letters
    private static final Map<Character, String> PHONE_MAP = Map.of(
        '2', "abc", '3', "def", '4', "ghi", '5', "jkl",
        '6', "mno", '7', "pqrs", '8', "tuv", '9', "wxyz"
    );

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        // Edge case: if input is empty, return an empty list
        if (digits == null || digits.length() == 0) {
            return result;
        }
        backtrack(result, digits, new StringBuilder(), 0);
        return result;
    }

    private void backtrack(List<String> result, String digits, StringBuilder path, int index) {
        // Base case: if path length matches digits length, we found a combination
        if (index == digits.length()) {
            result.add(path.toString());
            return;
        }

        // Get letters for the current digit
        String letters = PHONE_MAP.get(digits.charAt(index));
        for (char letter : letters.toCharArray()) {
            path.append(letter);             // Choose
            backtrack(result, digits, path, index + 1); // Explore
            path.deleteCharAt(path.length() - 1); // Backtrack (Un-choose)
        }
    }
}
