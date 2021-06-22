import Greeter from "../src/Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string;
  constructor(greeting: string, extra: string = "!!") {
    super(greeting);
    this.extra = extra;
  }
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}
