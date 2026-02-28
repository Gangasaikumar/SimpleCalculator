import { describe, it, expect } from "vitest";
import { calculateResult } from "./calculator";

describe("calculator logic", () => {
  it("should handle basic addition", () => {
    expect(calculateResult("2+2", "=")).toBe("4");
  });

  it("should handle subtraction", () => {
    expect(calculateResult("10-5", "=")).toBe("5");
  });

  it("should handle multiplication", () => {
    expect(calculateResult("3*4", "=")).toBe("12");
  });

  it("should handle division", () => {
    expect(calculateResult("20/5", "=")).toBe("4");
  });

  it("should handle percentage", () => {
    // Current logic replaces % with /100
    expect(calculateResult("50%", "=")).toBe("0.5");
  });

  it("should clear the output on AC", () => {
    expect(calculateResult("123", "AC")).toBe("");
  });

  it("should delete the last character on DEL", () => {
    expect(calculateResult("123", "DEL")).toBe("12");
  });

  it("should handle invalid expressions", () => {
    expect(calculateResult("2++2", "=")).toBe("Error");
  });

  it("should not allow starting with a special character", () => {
    expect(calculateResult("", "+")).toBe("");
  });

  it("should append numbers and operators", () => {
    expect(calculateResult("1", "+")).toBe("1+");
    expect(calculateResult("1+", "2")).toBe("1+2");
  });
});
