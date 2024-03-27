#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk"

const answers: {
    numberOne: number,
    operator: string,
    numberTwo: number
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Enter your operator:",
        choices: ["+", "-", "*", "/"]
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number:"
    }
]);

// Destructuring assignment of answers
const { numberOne, operator, numberTwo } = answers;

// Perform the arithmetic operation
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid operator");
}

// Output the operation expression and result
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
