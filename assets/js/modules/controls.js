import { isPrime, firstXPrimeNumbers } from './primeCalc.js'
import { renderResult } from "./renderResult.js"

export const controls = () => {
    const button = document.querySelector('button')
    const input = document.querySelector('input')

    button.addEventListener('click', event => {
        const input = document.querySelector('#input')
        const primeAmount = input.value
        const primeNumbers = firstXPrimeNumbers(primeAmount)
        renderResult(primeNumbers)

    })

    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            const primeAmount = input.value
            const primeNumbers = firstXPrimeNumbers(primeAmount)
            renderResult(primeNumbers)
        }
    })
}