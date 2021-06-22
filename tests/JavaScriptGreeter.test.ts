import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("JSGreeter returns greeting wrapped in console.log statement", () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "hey there"
    );
    expect(javaScriptGreeter.greet("man")).toBe(
      'console.log("hey there, man!")'
    );
  });
  test("JSGreeter returns greeting wrapped in console.log statement #2", () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "hello again"
    );
    expect(javaScriptGreeter.greet("bro")).toBe(
      'console.log("hello again, bro!")'
    );
  });
});
