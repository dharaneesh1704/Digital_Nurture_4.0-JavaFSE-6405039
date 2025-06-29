import java.util.Arrays;
import java.util.HashMap;

public class ProductSearch {
    static int linearSearch(Product[] products, int searchId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == searchId) {
                return i;
            }
        }
        return -1;
    }

    static int binarySearch(Product[] products, int searchId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == searchId) {
                return mid;
            }
            if (products[mid].productId < searchId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(3, "Laptop", "Electronics"),
            new Product(1, "Shirt", "Clothing"),
            new Product(2, "Book", "Books"),
            new Product(5, "Phone", "Electronics"),
            new Product(4, "Shoes", "Footwear")
        };

        int idToFind = 2;

        long startLinear = System.nanoTime();
        int linearIndex = linearSearch(products, idToFind);
        long endLinear = System.nanoTime();
        System.out.println("Linear Search: " + (linearIndex != -1 ? products[linearIndex] : "Not found") + ", Time: " + (endLinear - startLinear) + " ns");

        Arrays.sort(products, (a, b) -> a.productId - b.productId);
        long startBinary = System.nanoTime();
        int binaryIndex = binarySearch(products, idToFind);
        long endBinary = System.nanoTime();
        System.out.println("Binary Search: " + (binaryIndex != -1 ? products[binaryIndex] : "Not found") + ", Time: " + (endBinary - startBinary) + " ns");

        HashMap<Integer, Product> productMap = new HashMap<>();
        for (Product p : products) {
            productMap.put(p.productId, p);
        }
        long startHash = System.nanoTime();
        Product hashResult = productMap.get(idToFind);
        long endHash = System.nanoTime();
        System.out.println("HashMap Search: " + (hashResult != null ? hashResult : "Not found") + ", Time: " + (endHash - startHash) + " ns");
    }
}
