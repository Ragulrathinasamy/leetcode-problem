class Solution:
    def removeElement(self, nums, val):
        # k is the index for the next valid (non-val) element
        k = 0
        
        for i in range(len(nums)):
            # If current element is not the one to remove
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
                
        return k
