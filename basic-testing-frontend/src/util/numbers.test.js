import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number,", () => {
  //Arrange
  const str = "1";
  //Act
  const result = transformToNumber(str);

  //Expected
  expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of type number,", () => {
  //Arrange
  const str = "1";
  //Act
  const result = transformToNumber(str);

  //Expected
  expect(result).toBe(+str);
});

it("should yield NaN for non-transformable values", () => {
  //Arrange
  const str = "invalid";
  const str2 = {};
  //Acte
  const result = transformToNumber(str);
  const result2 = transformToNumber(str2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
