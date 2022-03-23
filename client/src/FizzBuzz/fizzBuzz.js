// Emulo una lista de numeros
const randomNumberList = [15, 5, 8, 1, 14, 33, 9, 45]

// recorro cada elemento de la lista con un map
const fizzBuzzList = randomNumberList.map((number, i) => {
  // si es divisible entre 3 el numero entonces isDivisibleByThree será true 
  const isDivisibleByThree = number % 3 === 0
  // si el numero actual tiene un 3 será true
  const doesItIncludesTheNumberThree = (String(randomNumberList[i]).indexOf('3')) !== -1 
  
  const isDivisibleByFive = number % 5 === 0
  const doesItIncludesTheNumberFive = (String(randomNumberList[i]).indexOf('5')) !== -1
  
  // si es divisible entre 3 y 5 el numero entonces isDivisibleByThreeAndFive será true 
  const isDivisibleByThreeAndFive = number % 3 === 0 && number % 5 === 0

  if(isDivisibleByThreeAndFive) return 'FizzBuzz'
  else if(isDivisibleByThree || doesItIncludesTheNumberThree) return 'Fizz'
  else if(isDivisibleByFive || doesItIncludesTheNumberFive) return 'Buzz'
  else return number
})

console.log(fizzBuzzList)
