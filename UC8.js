class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addPerson(person) {
        const isDuplicate = this.contacts.some(contact => contact.name.toLowerCase() === person.name.toLowerCase());
        if (isDuplicate) {
            console.log(`Duplicate entry found: ${person.name} already exists!`);
        } else {
            this.contacts.push(person);
            console.log(`${person.name} added successfully.`);
        }
    }

    searchByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => contact.name); // Returns only names of people in that city
    }

    searchByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => contact.name);
    }

    getAllContacts() {
        return this.contacts;
    }
}

// Example Usage
const myAddressBook = new AddressBook();

myAddressBook.addPerson({ name: "John Doe", phone: "1234567890", email: "john@example.com", city: "New York", state: "NY" });
myAddressBook.addPerson({ name: "Jane Doe", phone: "9876543210", email: "jane@example.com", city: "Los Angeles", state: "CA" });
myAddressBook.addPerson({ name: "Mike Smith", phone: "1112223333", email: "mike@example.com", city: "New York", state: "NY" });

console.log("People in New York:", myAddressBook.searchByCity("New York")); // Output: ["John Doe", "Mike Smith"]
console.log("People in California:", myAddressBook.searchByState("CA")); // Output: ["Jane Doe"]
