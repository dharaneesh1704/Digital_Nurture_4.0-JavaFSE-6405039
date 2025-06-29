-- PL/SQL Control Procedures Exercise
-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old
DECLARE
    CURSOR cur_customers IS
        SELECT CustomerID, DOB FROM Customers;
    v_customer_id Customers.CustomerID%TYPE;
    v_dob Customers.DOB%TYPE;
    v_age NUMBER;
BEGIN
    FOR rec IN cur_customers LOOP
        v_customer_id := rec.CustomerID;
        v_dob := rec.DOB;
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, v_dob) / 12);
        IF v_age > 60 THEN
            UPDATE Loans SET InterestRate = InterestRate - 1
            WHERE CustomerID = v_customer_id;
        END IF;
    END LOOP;
END;
/

-- Scenario 2: Set IsVIP flag for customers with balance over $10,000
ALTER TABLE Customers ADD (IsVIP CHAR(1) DEFAULT 'N');

BEGIN
    FOR rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers SET IsVIP = 'Y' WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;
END;
/

-- Scenario 3: Print reminders for loans due in next 30 days
BEGIN
    FOR rec IN (SELECT LoanID, CustomerID, EndDate FROM Loans WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || rec.CustomerID || ' has a loan (ID: ' || rec.LoanID || ') due on ' || TO_CHAR(rec.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
