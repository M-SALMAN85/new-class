// let percentage = 92;
// if (percentage >= 90){
//     console.log("New");
// }
// else {
//     console.log("Not Done");
// }
// let achiJob = true;
// let canCock = false;
// if (achiJob || canCock) {
//     console.log("Clebrate")
// }
// else {
//     console.log("reject")
// }
// let myPercentage = 59;
// if (myPercentage >= 90 && myPercentage <=100){
//     console.log("Grade: A+");
// }
//     else if  (myPercentage >= 70 && myPercentage <90){
//         console.log("Grade: A");
// }
//     else if (myPercentage >= 60 && myPercentage <70){
//         console.log("Grade: B");
// }
//     else if (myPercentage >= 50 && myPercentage <60){
//         console.log("Grade: C");
// }
// else {
//     console.log("Grade: Fail");
// }
// let age = 17;
// let result = age >= 18 ? "Allow" : "Not Allow";
// console.log(result);
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of operators to perform action",
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
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("Please Enter Write Operator");
}
