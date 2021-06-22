import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("LoudGreeter class contains an initial value of 3 exclamation points", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("howdy");
    expect(loudGreeter.greet("man")).toBe("howdy, man!!!");
  });
  test("addVolume method increases exclamation points by one", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("howdy");
    loudGreeter.addVolume();
    expect(loudGreeter.greet("man")).toBe("howdy, man!!!!");
  });
  test("multiple addVolume methods increase exclamation points by one each", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("howdy");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("man")).toBe("howdy, man!!!!!!");
  });
});
