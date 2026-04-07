class Solution(object):
    def multiply(self, num1, num2):
        if num1 == "0" or num2 == "0":
            return "0"
            
        # The result can have at most len(num1) + len(num2) digits
        res = [0] * (len(num1) + len(num2))
        
        # Reverse to multiply from right to left (ones, tens, etc.)
        num1, num2 = num1[::-1], num2[::-1]
        
        for i in range(len(num1)):
            for j in range(len(num2)):
                # Multiply digits and add to the specific bucket
                digit_prod = int(num1[i]) * int(num2[j])
                
                # Add to current position and handle the carry
                res[i + j] += digit_prod
                res[i + j + 1] += res[i + j] // 10
                res[i + j] %= 10
        
        # Reverse back and remove leading zero if it exists
        while len(res) > 1 and res[-1] == 0:
            res.pop()
            
        return "".join(map(str, res[::-1]))
