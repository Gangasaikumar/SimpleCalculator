import { describe, it, expect } from "vitest";
import { calculateResult } from "../src/utils/calculator";

describe("Multiplication and Division operations", () => {
  describe("Multiplication", () => {
    it("should multiply two positive numbers", () => {
      expect(calculateResult("5*6", "=")).toBe("30");
    });

    it("should multiply positive and negative numbers", () => {
      expect(calculateResult("5*-6", "=")).toBe("-30");
    });

    it("should multiply two decimal numbers", () => {
      expect(calculateResult("0.5*0.2", "=")).toBe("0.1");
    });

    it("should handle multiplication by zero", () => {
      expect(calculateResult("10*0", "=")).toBe("0");
    });
  });

  describe("Division", () => {
    it("should divide two positive numbers", () => {
      expect(calculateResult("20/4", "=")).toBe("5");
    });

    it("should divide to result in a decimal", () => {
      expect(calculateResult("5/2", "=")).toBe("2.5");
    });

    it("should handle division by zero", () => {
      // Logic uses Function(`return ${expression}`)() which returns Infinity for x/0
      expect(calculateResult("10/0", "=")).toBe("Infinity");
    });

    it("should handle negative division", () => {
      expect(calculateResult("-20/5", "=")).toBe("-4");
    });
  });
});
