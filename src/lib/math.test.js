import { sum } from "./math";

describe("the module math", () => {
  it("should sum 2 numbers", () => {
    expect(sum(3, 4)).toEqual(7);
  });
});
