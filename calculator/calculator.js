let display = document.getElementById("display")
let equation = ""
const symbols = ['+', '*', '/', '.']

function appendToDisplay(value) {
    const lastSymbol = equation.slice(-1)
    if (symbols.includes(value)) {
        if (equation.length === 0) {
            return
        } else if (symbols.includes(lastSymbol)) return
    }
    if (lastSymbol === '-' && (value === '-' || symbols.includes(value))) return
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
        equation = eval(equation).toString()
        display.value = equation
    } catch (error) {
        display.value = "Error"
    }
}
