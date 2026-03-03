class Solution:
    def reverse(self, x):
        
        MIN_INT, MAX_INT = -2147483648, 2147483647
        
        sign = -1 if x < 0 else 1
        x = abs(x)
        res = 0
        
        while x != 0:
            digit = x % 10
            x //= 10
            
        
            if res > (MAX_INT - digit) // 10:
                return 0
                
            res = res * 10 + digit
            
        return res * sign
