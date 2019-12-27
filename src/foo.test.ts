import { sum } from "./foo";

describe("a sample test with sum() function", () => {
  test("basic", () => {
    expect(sum()).toBe(0);
  });

  test("basic again", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("a sample async test with sum() function", () => {
  test("basic async", async () => {
    expect(sum()).toBe(0);
  });

  test("basic again async", async () => {
    expect(sum(1, 2)).toBe(3);
  }, 1000);
});
