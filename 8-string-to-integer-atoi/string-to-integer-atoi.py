class Solution(object):
    def myAtoi(self, s):
        
        MAX_INT = 2147483647
        MIN_INT = -2147483648
        
       
        s = s.lstrip()
        if not s:
            return 0
        
       
        sign = 1
        i = 0
        if s[i] == '-':
            sign = -1
            i += 1
        elif s[i] == '+':
            i += 1
            
      
        res = 0
        while i < len(s) and s[i].isdigit():
            digit = int(s[i])
            
           
            if res > (MAX_INT - digit) // 10:
                return MAX_INT if sign == 1 else MIN_INT
            
            res = res * 10 + digit
            i += 1
            
        return res * sign
