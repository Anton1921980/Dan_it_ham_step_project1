let firstNumber = +prompt("введите первое число");
let secondNumber = +prompt("введите второе число");
let operation = prompt("введите математическую операцию");
function calculator(a, b) {
    if (operation == "+") {
        return a + b;
    }
    else if (operation == "-") {
        return a - b;
    }
    else if (operation == "*") {
        return a * b;
    }
    else if (operation == "/") {
        return a / b;
    }
}
console.log(calculator(firstNumber, secondNumber))