import { describe, expect, it } from "vitest";
import { indexFromPathname, pathForIndex, pathFromLegacyHash } from "./paths";

describe("book paths", () => {
  it("maps cover and story pages", () => {
    expect(pathForIndex(0)).toBe("/");
    expect(pathForIndex(1)).toBe("/1/park");
    expect(pathForIndex(10)).toBe("/10/bedtime");
    expect(indexFromPathname("/")).toBe(0);
    expect(indexFromPathname("/1/park")).toBe(1);
    expect(indexFromPathname("/park")).toBe(1);
    expect(indexFromPathname("/1")).toBe(1);
    expect(indexFromPathname("/unknown")).toBe(null);
  });

  it("migrates old hash URLs", () => {
    expect(pathFromLegacyHash("#/")).toBe("/");
    expect(pathFromLegacyHash("#/1")).toBe("/1/park");
    expect(pathFromLegacyHash("#/park")).toBe("/1/park");
  });
});
