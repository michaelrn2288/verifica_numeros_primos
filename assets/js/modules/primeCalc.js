const isPrime = (number) => {
    for (let i = number; i > 0; i--) {
        if (i === 1) return true
        if (number % i === 0 && i !== 1 && i !== number) return false
    }
}

export const firstXPrimeNumbers = (primeAmount) => {
    const primeNumbers = []
    let checkedNumber = 2

    while (primeNumbers.length < primeAmount) {
        if (isPrime(checkedNumber)) {
            primeNumbers[primeNumbers.length] = checkedNumber
        }
        checkedNumber++
    }

    return primeNumbers
}