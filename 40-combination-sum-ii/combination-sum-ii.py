class Solution(object):
    def combinationSum2(self, candidates, target):
        results = []
        candidates.sort()  # Essential for skipping duplicates

        def backtrack(remain, stack, start):
            if remain == 0:
                results.append(list(stack))
                return
            
            for i in range(start, len(candidates)):
                # If the current number is greater than the remainder, 
                # no need to check further because the array is sorted.
                if candidates[i] > remain:
                    break
                
                # Skip duplicates: if this isn't the first time we're 
                # picking a number for this position, and it's the same 
                # as the previous one, skip it.
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                
                stack.append(candidates[i])
                # Move to i + 1 because we cannot reuse the same element
                backtrack(remain - candidates[i], stack, i + 1)
                stack.pop()

        backtrack(target, [], 0)
        return results
