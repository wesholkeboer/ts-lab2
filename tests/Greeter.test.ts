import Greeter from "../src/Greeter";

describe("Greeter class", () => {
  test("greeter returns greeting phrase", () => {
    const greeter: Greeter = new Greeter("night");
    expect(greeter.greet("my dude")).toBe("night, my dude!");
  });
  test("greeter returns greeting phrase", () => {
    const greeter: Greeter = new Greeter("howdy");
    expect(greeter.greet("man")).toBe("howdy, man!");
  });
});