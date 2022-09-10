const isPrime = (number) => {
    for (let i = number; i > 0; i--) {
        if (i === 1) return true
        if (number % i === 0 && i !== 1 && i !== number) return false
    }
}

export const firstXPrimeNumbers = (x) => {
    const primeNumbers = []
    let counter = 0
    let number = 0
    while (counter < x) {
        number++
        if (isPrime(number)) {
            primeNumbers[counter] = number
            counter++
        }
    }
    return primeNumbers
}