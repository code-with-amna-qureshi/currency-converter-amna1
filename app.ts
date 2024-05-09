#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n Welcome to code with amna -Currency Convertor\n"));
//define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
}
async function main() {
    
//prompt the user to select currcies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }

]);

// Perform currency conversion by using formula
let from_rate = exchange_rate[user_answer.from_currency];
let to_rate = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of conversion
let base_amount = amount / from_rate
let converted_amount = base_amount * to_rate

//Display the converted amount
console.log(`converted amount = ${chalk.green(converted_amount.toFixed(2))}`);
}


main();