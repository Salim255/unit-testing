//import { test } from "vitest";
import { it, expect } from "vitest"; // Same as test
import { add } from "./math";

//test("should summarize all number values in an array");
it("should summarize all number values in an array", () => {
  //Arange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

/* it("Should yield NaN if at least one invalid number is provided ", () => {
  //Arrang
  const input = ["invalid"];

  //Act
  const result = add(input);

  //Assert

  expect(result).toBeNaN();
}); */

it("should yield a correct sum if an array of numeric string values is provided", () => {
  //Arrang
  const stringArray = [1, 2, 3];
  //Act
  const result = add(stringArray);

  //Assert
  const expectedResult = stringArray.reduce(
    (prevValue, currentValue) => +prevValue + +currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  //Arrang
  const numbers = [];
  //Act
  const result = add(numbers);
  //Assert

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  /*  try {
    const result = add();
  } catch (error) {
    expect(error).toBeDefined();
  } */
  //Or
  const resultFn = () => {
    return add();
  };
  expect(resultFn).toThrow();
});
