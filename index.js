"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let currencyconverter = {
    "USD": {
        "USD": 1,
        "EUR": 0.92,
        "PKR": 278
    },
    "EUR": {
        "EUR": 1,
        "USD": 1.08,
        "PKR": 300
    },
    "PKR": {
        "PKR": 1,
        "EUR": 0.0033,
        "USD": 0.0036,
    },
};
// input prompt
const answer = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter your currency which you want to convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "to",
        message: "select which currency convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount in number",
        type: "number",
        choices: ["USD", "EUR", "PKR"]
    }
]);
const { from, to, amount } = answer;
//conversion
if (from && to && amount) {
    let result = currencyconverter[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else
    console.log("invalid opreator select");
