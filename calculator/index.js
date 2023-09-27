const sum = (a, b) => a + b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b
const substract = (a, b) => a - b

function calculate(a, b, operation) {
    let result = null

    switch(operation) {
        case '+':
            result = sum(a, b)
            break
        case '-':
            result = substract(a, b)
            break
        case '*':
            result = multiply(a, b)
            break
        case '/':
            result = divide(a, b)
            break
    }
    return result
}

let firstNumber = document.getElementById('num1')
let secondNumber = document.getElementById('num2')
let operationSelect = document.querySelector('.operations')
let output = document.getElementById('output')
let evaluateBtn = document.getElementById('evaluate')

function evaluate() {
    const num1 = Number(firstNumber.value)
    const num2 = Number(secondNumber.value)
    const operation = operationSelect.value
    const resalt = calculate(num1, num2, operation)
    output.innerHTML = resalt
}

evaluateBtn.addEventListener('click', evaluate)
