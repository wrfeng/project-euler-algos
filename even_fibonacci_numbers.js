// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even - valued terms.

function even_fibonacci_numbers(max) {
  fibs = iterative_fib(max)

  even_nums = fibs.filter(num => num % 2 === 0)

  return even_nums.reduce((acc, curr) => acc + curr)
}

//returns the num recurisve values
//causes stack overflow when trying to solve the problem using recursion
function recursive_fib(num) {
  if (num === 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [1, 2];

  let arr = recursive_fib(num-1)
  let last = arr.slice(-1)[0]
  let second_last = arr.slice(-2, -1)[0]
  arr = arr.concat(last + second_last)

  return arr  
}



function iterative_fib(max) {
  fibs = [1, 2]

  let last = fibs.slice(-1)[0]
  let second_last = fibs.slice(-2, -1)[0]

  while (last + second_last <= max) {
    last = fibs.slice(-1)[0]
    second_last = fibs.slice(-2, -1)[0]
    fibs.push(last + second_last)
  }

  return fibs
}