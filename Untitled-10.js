
const Joe = {
    name: "Joe",
    age: 18,
    address: {
        street: "123 Main St",
    },
    sayHi () {
        console.log("hello Joe")
    }
}

function callSayHi(person) {
    person?.sayHi?.()
}

callSayHi(Joe)