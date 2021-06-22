import Greeter from "./Greeter";
import chalk from "chalk";

export default class ChalkGreeter {
  greeting: string;
  color: string;
  constructor(greeting: string, color: string) {
    this.greeting = greeting;
    this.color = color;
  }
  chalkColor(color: string) {
    chalk.color;
  }
  greet(name: string): void {
    console.log(`${chalk[this.color]}`);
  }
}
