// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


function largestPrimeFactor(num) {
  let factors = getFactors(num)
  let primes = getPrimeNumbersUpTo(num)
  let hash = {}

  for (i in primes) {
    hash[primes[i]] = 1
  }

  console.log(factors)
  console.log(primes)
  console.log(hash)
  for (let i = factors.length - 1; i >= 0; i--) {
    if (hash[factors[i]]) return hash[factors[i]]
  }

  return 1
}

function getFactors(num) {
  let factors = []

  for(let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i)
  }

  return factors
}

function getPrimeNumbersUpTo(num) {
  let hash = {}

  for (let i = 2; i <= num; i++) {
    hash[i] = true
  }

  for (let i = 2; i * i <= num; i++) {
    if (hash[i]) {
      for (let j = i * i; j <= num; j += i) {
        hash[j] = false
      }
    }
  }

  return Object.keys(hash).filter(num => hash[num])
}
