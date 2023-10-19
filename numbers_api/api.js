const globalUrl = 'http://numbersapi.com/'
const randomFactBtn = document.getElementById('random-fact-btn')
const outputFact = document.getElementById('fact-text')
const userInput = document.getElementById('user-number')
const userSubmit = document.getElementById('custom-fact-btn')

randomFactBtn.addEventListener('click', get_random_fact)
userSubmit.addEventListener('click', get_user_number_fact)

function get_number_fact(url) {
    fetch(url)
    .then((res) => {
        if (!res.ok) {
            console.error('Number API responded with an error.')
        }
        return res.text()
    })
    .then((data) => {
        outputFact.innerHTML = data
    })
    .catch((error) => console.error(error))
}

function get_random_fact() {
    let url = globalUrl + 'random/trivia'
    get_number_fact(url)
}

function get_user_number_fact() {
    let number = userInput.value
    let url = globalUrl.concat(number, '/trivia')
    get_number_fact(url)
}
