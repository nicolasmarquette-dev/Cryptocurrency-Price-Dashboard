import { describe, it, expect } from "vitest";
import { formatPrice, formatPercentage } from "@/utils/format";

describe("formatPrice", () => {
  it("should format a regular price with 2 decimals", () => {
    expect(formatPrice(1234.56)).toBe("$1,234.56");
  });

  it("should format zero", () => {
    expect(formatPrice(0)).toBe("$0.00");
  });

  it("should format large numbers with thousand separators", () => {
    expect(formatPrice(45230.5)).toBe("$45,230.50");
    expect(formatPrice(1000000)).toBe("$1,000,000.00");
  });

  it("should round to 2 decimal places", () => {
    expect(formatPrice(99.999)).toBe("$100.00");
    expect(formatPrice(50.124)).toBe("$50.12");
    expect(formatPrice(50.125)).toBe("$50.13");
  });

  it("should handle small decimal values", () => {
    expect(formatPrice(0.05)).toBe("$0.05");
    expect(formatPrice(0.1)).toBe("$0.10");
  });

  it("should handle negative values", () => {
    expect(formatPrice(-100)).toBe("-$100.00");
  });
});

describe("formatPercentage", () => {
  it("should format positive values with + sign", () => {
    expect(formatPercentage(5.5)).toBe("+5.50%");
    expect(formatPercentage(100)).toBe("+100.00%");
  });

  it("should format negative values with - sign", () => {
    expect(formatPercentage(-3.14)).toBe("-3.14%");
    expect(formatPercentage(-0.5)).toBe("-0.50%");
  });

  it("should format zero with + sign", () => {
    expect(formatPercentage(0)).toBe("+0.00%");
  });

  it("should round to 2 decimal places", () => {
    expect(formatPercentage(1.999)).toBe("+2.00%");
    expect(formatPercentage(-1.234)).toBe("-1.23%");
  });

  it("should handle very small values", () => {
    expect(formatPercentage(0.01)).toBe("+0.01%");
    expect(formatPercentage(-0.001)).toBe("-0.00%");
  });
});
