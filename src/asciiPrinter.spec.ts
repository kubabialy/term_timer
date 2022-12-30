import {asciiArt} from "./asciiPrinter";
import {expect} from "chai";

describe("asciiArt", () => {
  it("should return the correct ascii art for the number 1", () => {
    expect(asciiArt("1")).eq(
      `
  ___ 
 / _ \\
| | | |
| | | |
| |_| |
  \\___/`
    );
  });
  it("should return the correct ascii art for the number 2", () => {
    expect(asciiArt("2")).eq(
      `
  _____
  / ___/
  / /__
  / ___/
  / /___
  \\____/`
    );
  });
}
)
