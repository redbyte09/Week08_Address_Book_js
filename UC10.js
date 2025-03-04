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

    countByCity() {
        return this.contacts.reduce((count, person) => {
            count[person.city] = (count[person.city] || 0) + 1;
            return count;
        }, {});
    }

    countByState() {
        return this.contacts.reduce((count, person) => {
            count[person.state] = (count[person.state] || 0) + 1;
            return count;
        }, {});
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
myAddressBook.addPerson({ name: "Alice Brown", phone: "5556667777", email: "alice@example.com", city: "Los Angeles", state: "CA" });

console.log("Contact count by City:", myAddressBook.countByCity());
console.log("Contact count by State:", myAddressBook.countByState());
