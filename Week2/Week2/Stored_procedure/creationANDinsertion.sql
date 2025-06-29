-- PL/SQL: Schema Creation and Data Insertion
-- This script creates all required tables and inserts sample data for the banking system.

-- Drop tables if they exist (for Oracle, use a block to avoid errors)
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Employees'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Loans'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Transactions'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Accounts'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Customers'; EXCEPTION WHEN OTHERS THEN NULL; END;
/

-- Create Customers table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER(10,2),
    LastModified DATE
);

-- Create Accounts table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2),
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Create Transactions table
CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER(10,2),
    TransactionType VARCHAR2(15),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

-- Create Loans table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER(10,2),
    InterestRate NUMBER(5,2),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER(10,2),
    Department VARCHAR2(50),
    HireDate DATE
);

-- Insert sample data into Customers
INSERT INTO Customers VALUES (101, 'Amit Kumar', TO_DATE('1982-03-10', 'YYYY-MM-DD'), 2500.50, SYSDATE);
INSERT INTO Customers VALUES (102, 'Priya Singh', TO_DATE('1995-11-25', 'YYYY-MM-DD'), 3200.00, SYSDATE);

-- Insert sample data into Accounts
INSERT INTO Accounts VALUES (201, 101, 'Savings', 2500.50, SYSDATE);
INSERT INTO Accounts VALUES (202, 102, 'Current', 3200.00, SYSDATE);

-- Insert sample data into Transactions
INSERT INTO Transactions VALUES (301, 201, SYSDATE, 500.00, 'Deposit');
INSERT INTO Transactions VALUES (302, 202, SYSDATE, 200.00, 'Withdrawal');

-- Insert sample data into Loans
INSERT INTO Loans VALUES (401, 101, 10000.00, 6.5, SYSDATE, ADD_MONTHS(SYSDATE, 36));

-- Insert sample data into Employees
INSERT INTO Employees VALUES (501, 'Sunil Mehra', 'Clerk', 35000.00, 'Operations', TO_DATE('2018-01-10', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (502, 'Rita Das', 'Analyst', 48000.00, 'Finance', TO_DATE('2019-09-15', 'YYYY-MM-DD'));

-- End of script
