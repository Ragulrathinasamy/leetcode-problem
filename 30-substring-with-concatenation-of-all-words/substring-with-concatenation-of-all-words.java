import java.util.*;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.length() == 0 || words == null || words.length == 0) {
            return result;
        }

        int wordLen = words[0].length();
        int wordCount = words.length;
        int totalLen = wordLen * wordCount;
        
        // Count frequency of each word in the target list
        Map<String, Integer> wordMap = new HashMap<>();
        for (String word : words) {
            wordMap.put(word, wordMap.getOrDefault(word, 0) + 1);
        }

        // We only need to start from indices 0 to wordLen - 1
        for (int i = 0; i < wordLen; i++) {
            int left = i, right = i, count = 0;
            Map<String, Integer> currentMap = new HashMap<>();
            
            while (right + wordLen <= s.length()) {
                String word = s.substring(right, right + wordLen);
                right += wordLen;
                
                if (wordMap.containsKey(word)) {
                    currentMap.put(word, currentMap.getOrDefault(word, 0) + 1);
                    count++;
                    
                    // If we have more occurrences of 'word' than needed, slide left
                    while (currentMap.get(word) > wordMap.get(word)) {
                        String leftWord = s.substring(left, left + wordLen);
                        currentMap.put(leftWord, currentMap.get(leftWord) - 1);
                        count--;
                        left += wordLen;
                    }
                    
                    // If window size matches totalLen, we found a permutation
                    if (count == wordCount) {
                        result.add(left);
                    }
                } else {
                    // Not a valid word, reset the window
                    currentMap.clear();
                    count = 0;
                    left = right;
                }
            }
        }
        
        return result;
    }
}
