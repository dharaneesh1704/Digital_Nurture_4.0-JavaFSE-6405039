public class FinancialForeCasting {
    public static double calcFuture(double amount, double rate, int n) {
        if (n == 0)
            return amount;
        double last = calcFuture(amount, rate, n - 1);
        return last + last * rate;
    }

    public static double calcFutureMemo(double amount, double rate, int n, double[] saved) {
        if (n == 0)
            return amount;
        if (saved[n] != 0)
            return saved[n];
        double last = calcFutureMemo(amount, rate, n - 1, saved);
        saved[n] = last + last * rate;
        return saved[n];
    }

    public static void main(String[] args) {
        double startAmount = 1000;
        double yearlyRate = 0.05;
        int years = 10;

        double result1 = calcFuture(startAmount, yearlyRate, years);
        System.out.println("Future Value (Recursive): " + result1);

        double[] saved = new double[years + 1];
        double result2 = calcFutureMemo(startAmount, yearlyRate, years, saved);
        System.out.println("Future Value (Memoized): " + result2);
    }
}
