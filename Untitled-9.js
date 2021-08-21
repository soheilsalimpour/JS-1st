
const Joe = {
    name: "Joe",
    age: 18,
    address: {
        street: "123 Main St",
    },
}

function printStreet(person) {
    console.log(person?.address?.street)
}

printStreet(Joe)