package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ArrangeActAssertTest {

    private int a;
    private int b;

    @Before
    public void setUp() {
        // Arrange: Initialize variables
        a = 5;
        b = 10;
    }

    @After
    public void tearDown() {
        // Teardown: Reset variables
        a = 0;
        b = 0;
    }

    @Test
    public void testAddition() {
        // Act: Perform addition
        int result = a + b;

        // Assert: Verify the result
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        // Act: Perform multiplication
        int result = a * b;

        // Assert: Verify the result
        assertEquals(50, result);
    }
}
