# unit-testing

# file.test or file.spect, are for unit testing, then Vitest or Jest with excute that file

# AAA - Arrang , Act, Assert

# A \_\_\_ Arange --- Define the testing environnment

# A /// Act = > Run the actuel code /fucntion that should be tested

# A Assert Evaluate the prduced value / result and compare it to the expected value / result

# What to test & Not to test

## 1\ Only test your code

### \*\ Dont test therd party API (eg: fech() API)(dont test if it wark as inteded)

### \*\ Dont test your server-side code via your frontend code

# Writing Good Tests

## 1\ Follow ARRANG-ACT-ASSERT(AAA) pattern

## 2\ Your test should only test one thing

### \* One test should test one unit and one behavior or one expected outcome of that unit or the function, we test one thing per test

## 3\ Focus ont he essence of a test when arranging

## 4\ Keep your number of assertions (expect) low

## 5\ Only Test 'One Thing'

### \*\ One fueature or behavior per test

## 6\ Splitting Function For Easier Testing & Better Code

# 🍎 Integration test:

## We said an integration test if we combining multiple units or multiple functions
