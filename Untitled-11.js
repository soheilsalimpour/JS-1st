
const Joe = {
    name: "Joe",
    age: 18,
    address: {
        street: "123 Main St",
    },
    hobbies: ['Bowling', ['Weight lifting']]
}

function printHobbyOne(person) {
    console.log(person.hobbies[0])
}

callSayHi(Joe)