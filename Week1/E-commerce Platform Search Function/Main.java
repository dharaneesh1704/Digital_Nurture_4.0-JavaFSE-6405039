import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Phone", "Electronics"),
            new Product(3, "Tablet", "Electronics"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Camera", "Photography")
        };

        System.out.println("E-commerce Product Search Demo");
        System.out.println("============================");

        int searchId = 3;
        System.out.println();
        System.out.println("Searching for product ID: " + searchId);

        long start = System.nanoTime();
        int linearIndex = ProductSearch.linearSearch(products, searchId);
        long linearTime = System.nanoTime() - start;

        Arrays.sort(products, (a, b) -> a.productId - b.productId);
        start = System.nanoTime();
        int binaryIndex = ProductSearch.binarySearch(products, searchId);
        long binaryTime = System.nanoTime() - start;

        System.out.println();
        System.out.println("Results:");
        System.out.println("Linear Search found: " + (linearIndex != -1 ? products[linearIndex] : "Not found"));
        System.out.println("Binary Search found: " + (binaryIndex != -1 ? products[binaryIndex] : "Not found"));

        System.out.println();
        System.out.println("Time taken:");
        System.out.println("Linear Search: " + linearTime + " ns");
        System.out.println("Binary Search: " + binaryTime + " ns");

        System.out.println();
        System.out.println("Trying to find non-existent product (ID: 10)");
        linearIndex = ProductSearch.linearSearch(products, 10);
        binaryIndex = ProductSearch.binarySearch(products, 10);
        System.out.println("Linear Search result: " + (linearIndex != -1 ? products[linearIndex] : "Not found"));
        System.out.println("Binary Search result: " + (binaryIndex != -1 ? products[binaryIndex] : "Not found"));
    }
}
