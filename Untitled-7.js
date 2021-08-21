
const Joe = {
    name: "Joe",
    age: 18,
    address: {
        street: "123 Main St",
    },
}

function printStreet(person) {
    if(person && person.address) {
    console.log(person.address.street)
}
}

printStreet(Joe)