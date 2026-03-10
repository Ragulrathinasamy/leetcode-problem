import java.util.PriorityQueue;

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;

        
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);

        
        for (ListNode list : lists) {
            if (list != null) {
                pq.add(list);
            }
        }

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (!pq.isEmpty()) {
           
            ListNode smallest = pq.poll();
            tail.next = smallest;
            tail = tail.next;

            
            if (smallest.next != null) {
                pq.add(smallest.next);
            }
        }

        return dummy.next;
    }
}
