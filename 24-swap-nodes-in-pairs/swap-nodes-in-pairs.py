# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def swapPairs(self, head): # Removed : ListNode
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        
        while prev.next and prev.next.next:
            # Identify nodes
            first = prev.next
            second = prev.next.next
            
            # Swap
            first.next = second.next
            second.next = first
            prev.next = second
            
            # Move pointer
            prev = first
            
        return dummy.next
