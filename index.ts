#!/user/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


// initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;

// print welcome message
console.log(chalk.blue("\n \twelcome to - ATM MACHINE\n"));

let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: chalk.yellow("Enter your pin code:")

    }
])
if (pinAnswer.pin === myPin){
    console.log  (chalk.red("\n \tpin is correct, login Succesfully!\n"));
    // 'console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select An Operations:",
            choices: ["Withdraw Amount", "check balance"]
        }
    ])

    if (operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
           {
            name: "withdrawMethod",
            type: "list",
            message: "Select a withdrawl method:",
            choices: ["Fast Cash","Enter Amount"]
           }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
           let fastCashAns = await inquirer.prompt([
               {
                name: "fast cash",
                type: "list",
                message: "Select Amount:",
                choices: [1000,2000,5000,10000,20000,50000]
               }
           ])
        if(fastCashAns.fastCash > myBalance){
            console.log(chalk.green("Insufficient Balance"));
        }
        else{
             myBalance -= fastCashAns.fastCash
             console.log(`${fastCashAns.fastCash} withdraw succesfully`);
             console.log(`your remaining balance is ${myBalance}`);
        }
        }
        else if(withdrawAns.withdrawMethod === "Enter Amount"){
             let amountAns = await inquirer.prompt([
            {
             name: "amount",
             type: "number",
             message: "Enter the amount to withdraw:"
           }
       ])
       if(amountAns.amount > myBalance){
           console.log("Insufficient Balance");
       }
       else{
           myBalance -= amountAns.amount;
           console.log(chalk.red(`${amountAns.amount} withdraw Succesfully`));
           console.log(chalk.blue(` your remaining balance is: ${myBalance}`));
       }
       }
       else if (operationAns.operation === "check balance"){
           console.log(`your current balance is${myBalance}`);
      }
     }
       else{
           console.log("pin is incorrect, Try Again!");
      }
    }