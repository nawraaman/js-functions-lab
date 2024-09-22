function greeting(myName, lastName) {
  console.log(`Hi ${myName} ${lastName}`)
}
greeting('Nawra', 'Aman')

function multi(num1, num2) {
  result = num1 * num2
  console.log(result)
}
multi(2, 3)

function computeArea(width, height) {
  rectangle = width * height
  console.log(
    `The area of a rectangle with a width of ${width} and a height of ${height} is ${rectangle} saquare units`
  )
}
computeArea(4, 4)
// Exercise 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercies 1 Result:', maxOfTwoNumbers(55, 20))
// Exercise 2
const isAdult = (age) => {
  if (age >= 18) {
    return 'adult'
  } else {
    return 'minor'
  }
}
console.log('Exercise 2 Result:', isAdult(21))

// Exercise 3
const isCharAVowel = (char) => {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return 'true'
  } else {
    return 'false'
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

// Exercise 4
const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

// Exercise 5
const greetUser = (name, time) => {
  return `Good ${time} ${name}`
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

// Exercise 6
const maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x
  } else if (y > x && y > z) {
    return y
  } else {
    return z
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

// Exercise 7
const calculateTip = (x, y) => {
  return (x * y) / 100
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

// Exercise 8
const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return temp * (9 / 5) + 32
  } else if (scale === 'F') {
    return (temp - 32) * (5 / 9)
  } else {
    return 'Invalid'
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

// Exercise 9
const basicCalculator = (num1, num2, oper) => {
  if (oper === 'add') {
    return num1 + num2
  } else if (oper === 'subtract') {
    return num1 - num2
  } else if (oper === 'multiply') {
    return num1 * num2
  } else {
    return num1 / num2
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

// Exercise 10
const calculateGrade = (grade) => {
  if (grade >= 90) {
    return 'A'
  } else if (grade >= 80) {
    return 'B'
  } else if (grade >= 70) {
    return 'C'
  } else if (grade >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(85))

// Exercise 11
const createUsername = (first, last) => {
  const firstThree = first.slice(0, 3)
  const lastThree = last.slice(0, 3)
  const fullName = first.length + last.length
  return firstThree + lastThree + fullName
}
console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))
