const { convertIntToRoman } = require("../services/ConversionService");
import {describe, expect, it} from '@jest/globals';

const number = 98;

describe("Roman Numeral Conversion", () => {
  it("should return a valid Roman Numeral", () => {
    const romanNumeral = convertIntToRoman(number);
    const result = "XCVIII";
    expect(romanNumeral).toBe(result);
  });
  it("should return a false message", () => {
    const romanNumeral = convertIntToRoman(34);
    const result = "XCVIII";
    expect(romanNumeral).not.toBe(result);
  });
  it("should return the length", () => {
    const romanNumeral = convertIntToRoman(number);
    const result = "XCVIII";
    expect(romanNumeral.length).toEqual(result.length);
  });
  it("should not be null", () => {
    const romanNumeral = convertIntToRoman(number);
    expect(romanNumeral).not.toBeNull();
  });
  it("should return strings", () => {
    const romanNumeral = convertIntToRoman(number);
    const resultType = typeof romanNumeral;
    expect(resultType).toBe("string");
  });
});