class Solution(object):
    def firstMissingPositive(self, nums):
        n = len(nums)
        
        for i in range(n):
            # While the current number is in the valid range [1, n]
            # and it is not at its correct position (nums[i] - 1),
            # swap it with the number at its target position.
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                # We must use this specific swap syntax to avoid index errors
                correct_idx = nums[i] - 1
                nums[i], nums[correct_idx] = nums[correct_idx], nums[i]
        
        # After rearranging, the first index 'i' where nums[i] != i + 1
        # tells us that 'i + 1' is the missing number.
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1
        
        # If all numbers 1 to n are present, the missing one is n + 1
        return n + 1
