# Bank tech test

This is my attempt at the Makers Bank Tech Test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## How to run the project



## How I installed the project
```
npm init -y
npm i jest eslint
eslint --init 
git init -y
npm add --dev eslint eslint-plugin-jest
```
added to scripts:
```
  "scripts": {
    "lint": "eslint .",
    "test": "npm run lint && npm run test:unit",
    "test:unit": "jest"
```
added jest to .eslintrc.js
```
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
```

## Model

This is the model drawn prior to beginning writing the code.

![Alt text](/assets/bank_tech_test1.png?raw=true "Optional Title")

## Tests

### Unit tests:

#### ACCOUNT Class:
```
1.
showBalance() => 0

2.
statement() => 
date || credit || debit || balance


3.
mock transaction = new Transaction("01/05/2022", 10)
statement() => 
date || credit || debit || balance
01/05/2022

4.
mock transaction = new Transaction("01/05/2022", 10)
statement() => 
date || credit || debit || balance
01/05/2022 || 10

5.
mock transaction = new Transaction("01/05/2022", 10)
statement() => 
date || credit || debit || balance
01/05/2022 || || 10 || 10

6.
mock transaction = new Transaction("01/05/2022", 10)
mock transaction = new Transaction("02/05/2022", 20)
statement() => 
date || credit || debit || balance
01/05/2022 || || 10 || 10
02/05/2022 || || 10 || 20

7.
mock transaction = new Transaction("01/05/2022", 10)
mock transaction = new Transaction("02/05/2022", 20)
mock transaction = new Transaction("03/05/2022", -2)

statement() => 
date || credit || debit || balance
01/05/2022 || || 10 || 10
02/05/2022 || || 10 || 20
03/05/2022 || 2 ||  || 28
```

#### TRANSACTION Class:
```
1. 
transaction = new Transaction("01/05/2022", 10)
transaction.getDate() => "01/05/2022"


2. 
transaction = new Transaction("01/05/2022", 10)
tranaction.amount() => 10

```

##### Edge cases
ACCOUNT
Decimals (working)
Subtraction (working)
Wrong data/object type for transaction (not sure how to test)

TRANSACTION
leaving properties blank (not-tested)
