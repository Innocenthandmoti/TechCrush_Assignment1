//

import { stdin } from "node:process";
import chalk from "chalk";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./my_module/calculator.js";

let inputNumber = 0; // use to determine first or second number
let a, b;

console.log(chalk.green("Please enter your first number."));

stdin.on("data", (input) => {
  const value = parseInt(String(input).trim());

  if (isNaN(value)) {
    console.log(chalk.red("Invalid input. Enter a valid number."));
    return; // Only returns when the value is not a number
  }

  if (inputNumber === 0) {
    a = value;
    inputNumber = 1;
    console.log(chalk.cyan("Enter your second number."));
  } else if (inputNumber === 1) {
    b = value;

    // Perform calculations only after both numbers are received
    console.log(
      chalk.red(`Your addition of ${a} & ${b} = ${addition(a, b)}.\n`)
    );
    console.log(
      chalk.blue(`Your subtraction of ${a} & ${b} = ${subtraction(a, b)}.\n`)
    );
    console.log(
      chalk.yellow(
        `Your multiplication of ${a} & ${b} = ${multiplication(a, b)}.\n`
      )
    );

    try {
      console.log(
        chalk.cyan(`Your division of ${a} & ${b} = ${division(a, b)}.\n`)
      );
    } catch (error) {
      console.error(chalk.red(`Error during division: ${error.message}`));
    }

    process.exit();
  }
});
