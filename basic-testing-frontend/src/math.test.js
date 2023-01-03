//import { test } from "vitest";
import { it, expect } from "vitest"; // Same as test
import { add } from "./math";

//test("should summarize all number values in an array");
it("should summarize all number values in an array", () => {
  //Arange
  const numbers = [1, 2, 3];

  console.log(expectedResult);
  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});
