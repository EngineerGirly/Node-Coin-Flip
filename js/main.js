const button = document.querySelector('button')
const answer = document.querySelector('h2')

button.addEventListener('click', () => {
    Math.random() > .5 ? answer.innerText = 'Heads' : answer.innerText = 'Tails'
})