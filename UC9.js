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

    viewPersonsByCity() {
        return this.contacts.reduce((result, person) => {
            if (!result[person.city]) {
                result[person.city] = [];
            }
            result[person.city].push(person.name);
            return result;
        }, {});
    }

    viewPersonsByState() {
        return this.contacts.reduce((result, person) => {
            if (!result[person.state]) {
                result[person.state] = [];
            }
            result[person.state].push(person.name);
            return result;
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

console.log("Persons by City:", myAddressBook.viewPersonsByCity());
console.log("Persons by State:", myAddressBook.viewPersonsByState());
