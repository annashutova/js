let display = document.getElementById("display")
let equation = ""
const historyList = document.getElementById("history-list")
const historyContent = document.querySelector(".history-content")
let history = []
const symbols = ['+', '*', '/', '.']

function toggleHistory() {
    if (historyContent.style.display === "block") {
      historyContent.style.display = "none"
    } else {
      updateHistory()
      historyContent.style.display = "block"
    }
}
  
function updateHistory() {
    historyList.innerHTML = ""
    history.forEach((entry) => {
        const listItem = document.createElement("li")
        listItem.textContent = entry
        listItem.addEventListener("click", () => {
            display.value = entry
            equation = entry
        })
        listItem.style.cursor = 'pointer'
        historyList.appendChild(listItem)
    })
}

function addToHistory(entry) {
    history.unshift(entry)
    if (history.length > 10) {
        history.pop()
    }
}

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
        addToHistory(equation)
    } catch (error) {
        display.value = "Error"
    }
}
