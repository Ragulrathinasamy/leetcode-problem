class Solution:
    def permuteUnique(self, nums):
        nums.sort()  # Essential for skipping duplicates
        result = []
        used = [False] * len(nums)
        
        def backtrack(path):
            if len(path) == len(nums):
                result.append(list(path))
                return
            
            for i in range(len(nums)):
                # If this element is already in the current path, skip it
                if used[i]:
                    continue
                
                # If this element is the same as the previous one AND 
                # the previous one wasn't used in this path, skip to avoid duplicate permutations
                if i > 0 and nums[i] == nums[i-1] and not used[i-1]:
                    continue
                
                used[i] = True
                path.append(nums[i])
                backtrack(path)
                
                # Backtrack: undo the choice
                path.pop()
                used[i] = False
                
        backtrack([])
        return result
