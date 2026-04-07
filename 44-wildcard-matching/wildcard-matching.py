class Solution(object):
    def isMatch(self, s, p):
        s_ptr, p_ptr = 0, 0
        s_star, p_star = -1, -1
        
        while s_ptr < len(s):
            # 1. Match single character or '?'
            if p_ptr < len(p) and (p[p_ptr] == '?' or p[p_ptr] == s[s_ptr]):
                s_ptr += 1
                p_ptr += 1
            
            # 2. Match '*' - record position to backtrack if needed
            elif p_ptr < len(p) and p[p_ptr] == '*':
                p_star = p_ptr
                s_star = s_ptr
                p_ptr += 1
            
            # 3. Last match failed, but we have a '*' to fall back on
            elif p_star != -1:
                p_ptr = p_star + 1
                s_star += 1
                s_ptr = s_star
            
            # 4. No match and no '*' to rescue us
            else:
                return False
        
        # 5. Check remaining characters in pattern (must all be '*')
        while p_ptr < len(p) and p[p_ptr] == '*':
            p_ptr += 1
            
        return p_ptr == len(p)
