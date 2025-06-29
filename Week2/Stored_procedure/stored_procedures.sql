-- PL/SQL Stored Procedures Exercise

-- Scenario 1: Process monthly interest for all savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR rec IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
        UPDATE Accounts
        SET Balance = Balance + (Balance * 0.01)
        WHERE AccountID = rec.AccountID;
    END LOOP;
END;
/

-- Scenario 2: Update employee bonus by department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN Employees.Department%TYPE,
    p_bonus_pct IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE Department = p_department;
END;
/

-- Scenario 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN Accounts.AccountID%TYPE,
    p_to_account IN Accounts.AccountID%TYPE,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account FOR UPDATE;
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account');
    END IF;
    UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountID = p_from_account;
    UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountID = p_to_account;
END;
/
