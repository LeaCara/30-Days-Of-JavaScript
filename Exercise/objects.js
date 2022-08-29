//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3

  //scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3

  //scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  // console.log(i), Uncaught ReferenceError: i is not defined

  const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location']) // undefined
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  console.log(person.getFullName())
  // Asabeneh Yetayeh

// Changing method
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

  const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson)
console.log(values)


const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))