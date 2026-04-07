class Solution(object):
    def combinationSum(self, candidates, target):
        results = []

        def backtrack(remain, stack, start):
            if remain == 0:
                results.append(list(stack))
                return
            
            for i in range(start, len(candidates)):
                # Optimization: if the number is already too big, skip it
                if candidates[i] > remain:
                    continue
                
                stack.append(candidates[i])
                # Stay at index 'i' to allow reusing the same number
                backtrack(remain - candidates[i], stack, i)
                stack.pop()

        # Optional: Sorting helps the 'if candidates[i] > remain' break early
        candidates.sort()
        backtrack(target, [], 0)
        return results
