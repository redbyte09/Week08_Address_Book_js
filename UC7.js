class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addPerson(person) {
        // Check if person already exists based on name
        const isDuplicate = this.contacts.some(contact => contact.name.toLowerCase() === person.name.toLowerCase());

        if (isDuplicate) {
            console.log(`Duplicate entry found: ${person.name} already exists!`);
        } else {
            this.contacts.push(person);
            console.log(`${person.name} added successfully.`);
        }
    }

    getAllContacts() {
        return this.contacts.map(contact => contact);
    }
}

// Example Usage
const myAddressBook = new AddressBook();

myAddressBook.addPerson({ name: "John Doe", phone: "1234567890", email: "john@example.com" });
myAddressBook.addPerson({ name: "Jane Doe", phone: "9876543210", email: "jane@example.com" });
myAddressBook.addPerson({ name: "John Doe", phone: "1122334455", email: "john.doe@gmail.com" }); // Duplicate Entry

console.log(myAddressBook.getAllContacts());
