import Greeter from "./Greeter";
import HTMLGreeter from "./HTMLGreeter";
import JavaScriptGreeter from "./JavaScriptGreeter";
import LoudGreeter from "./LoudGreeter";
import ChalkGreeter from "./ChalkGreeter";
import promptConfig from "prompt-sync";

const greeter = new Greeter("Hello");
const javaScriptGreeter = new JavaScriptGreeter("yo");
const loudGreeter = new LoudGreeter("hey");
// const hTMLGreeter = new HTMLGreeter("hey", "p");
const chalk = require("chalk");
const chalkGreeter = new ChalkGreeter("hey");
const prompt = promptConfig({ sigint: true });

// console.log(hTMLGreeter.greet("Mitch"));
// console.log(loudGreeter.greet("Mitch"));
// console.log(javaScriptGreeter.greet("Mitch"));
// console.log(greeter.greet("Mitch"));

// console.log(hTMLGreeter.greet(input));
// console.log(loudGreeter.greet(input));
// console.log(javaScriptGreeter.greet(input));
// console.log(greeter.greet(input));

console.log(chalkGreeter.greet("Mitch"));

let input = prompt("Please enter a name: ");
let input2 = prompt("Please enter an element type: ");
let input3 = prompt("Please enter a greeting: ");

// const hTMLGreeter = new HTMLGreeter(input3, input2);
// console.log(hTMLGreeter.greet(input));
