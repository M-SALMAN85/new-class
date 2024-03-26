import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter your first number", type: "number", name: "firstNumber" },
    { massage: "Enter your second number", type: "number", name: "secondNumber" },
    {
        massage: "Select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Enter Write Operator");
}
