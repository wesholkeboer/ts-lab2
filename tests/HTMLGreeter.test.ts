import HTMLGreeter from "../src/HTMLGreeter";

describe("HTMLGreeter class", () => {
  test("HTMLGreeter adds the <h1> tags around the greeting phrase by default", () => {
    const obj: HTMLGreeter = new HTMLGreeter("howdy");
    expect(obj.greet("man")).toBe("<h1>howdy, man!</h1>");
  });
  test("the tagName property is set based on a provided value", () => {
    const obj: HTMLGreeter = new HTMLGreeter("I'm sorry", "div");
    expect(obj.tagName).toBe("div");
  });
  test("HTMLGreeter adds <p> tags around the greeting phrase when 'p' is argument given", () => {
    const obj: HTMLGreeter = new HTMLGreeter("I'm sorry", "p");
    expect(obj.greet("Andrea")).toBe("<p>I'm sorry, Andrea!</p>");
  });
});
