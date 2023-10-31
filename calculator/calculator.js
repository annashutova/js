class Calculator {
    constructor() {
        this.display = document.getElementById("display"),
        this.equation = '',
        this.symbols = ['+', '*', '/', '.'],
        this.history = [],
        this.historyList = document.getElementById("history-list"),
        this.historyContent = document.querySelector(".history-content")
    }

    appendToDisplay(value) {
        const lastSymbol = this.equation.slice(-1)
        if (this.symbols.includes(value)) {
            if (this.equation.length === 0) {
                return
            } else if (this.symbols.includes(lastSymbol)) return
        }
        if (lastSymbol === '-' && (value === '-' || this.symbols.includes(value))) return
        this.equation += value
        this.display.value = this.equation
    }

    clearDisplay() {
        this.equation = ""
        this.display.value = ""
    }

    removeLastSymbol() {
        this.equation = this.equation.slice(0, -1)
        this.display.value = this.equation
    }

    calculateResult() {
        try {
            this.equation = eval(this.equation).toString()
            this.display.value = this.equation
            this.addToHistory(this.equation)
        } catch (error) {
            console.log(error)
            this.display.value = "Error"
        }
    }

    addToHistory(entry) {
        this.history.unshift(entry)
        if (this.history.length > 10) {
            this.history.pop()
        }
    }

    updateHistory() {
        this.historyList.innerHTML = ""
        this.history.forEach((entry) => {
            const listItem = document.createElement("li")
            listItem.textContent = entry
            listItem.addEventListener("click", () => {
                this.display.value = entry
                this.equation = entry
            })
            listItem.style.cursor = 'pointer'
            this.historyList.appendChild(listItem)
        })
    }

    toggleHistory() {
        if (this.historyContent.style.display === "block") {
          this.historyContent.style.display = "none"
        } else {
          this.updateHistory()
          this.historyContent.style.display = "block"
        }
    }
}

const calculator = new Calculator()
const history = document.getElementById("history-button")
const clearAll = document.getElementById("clear-button")
const evaluate = document.getElementById("calculate-button")

history.addEventListener('click', () => calculator.toggleHistory())
clearAll.addEventListener('click', () => calculator.clearDisplay())
evaluate.addEventListener('click', () => calculator.calculateResult())
