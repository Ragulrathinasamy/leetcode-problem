class Solution {
    public int divide(int dividend, int divisor) {
        // Handle 32-bit overflow case
        if (dividend == Integer.MIN_VALUE && divisor == -1) {
            return Integer.MAX_VALUE;
        }

        // Determine the sign of the result
        boolean negative = (dividend < 0) ^ (divisor < 0);

        // Convert both to long and absolute values to avoid overflow during calculations
        long lDividend = Math.abs((long) dividend);
        long lDivisor = Math.abs((long) divisor);

        int quotient = 0;

        // Exponential subtraction using bit shifting
        while (lDividend >= lDivisor) {
            long temp = lDivisor;
            long multiple = 1;
            
            // Shift divisor left (double it) as long as it's less than dividend
            while (lDividend >= (temp << 1)) {
                temp <<= 1;
                multiple <<= 1;
            }

            lDividend -= temp;
            quotient += multiple;
        }

        return negative ? -quotient : quotient;
    }
}
