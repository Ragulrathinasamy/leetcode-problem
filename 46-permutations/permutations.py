class Solution:
    def permute(self, nums):
        result = []
        
        def backtrack(current_path):
            # Base case: if path length matches nums length, we have a permutation
            if len(current_path) == len(nums):
                result.append(list(current_path))
                return
            
            for num in nums:
                # Since integers are distinct, we just check if num is already used
                if num not in current_path:
                    current_path.append(num)
                    backtrack(current_path)
                    current_path.pop() # This is the "backtracking" step
        
        backtrack([])
        return result
