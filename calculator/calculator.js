let display = document.getElementById("display")
let equation = ""
let operations = ["+", "/", ".", "*"]

function appendToDisplay(value) {
    equation += value
    display.value = equation
}

function clearDisplay() {
    equation = ""
    display.value = ""
}

function removeLastSymbol() {
    equation = equation.slice(0, -1)
    display.value = equation
}

function calculateResult() {
    try {
        equation = eval(equation)
        display.value = equation
    } catch (error) {
        display.value = "Error"
    }
}
