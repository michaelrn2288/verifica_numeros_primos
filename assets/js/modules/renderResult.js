export const renderResult = (primeNumbers) => {
    const result = document.querySelector('#result')
    result.textContent = primeNumbers.join(' - ')
}