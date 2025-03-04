class Person {
    constructor(name, phone, email, city, state, zip) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    // Overriding toString() method to display person details
    toString() {
        return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a person to the address book
    addPerson(person) {
        this.contacts.push(person);
    }

    // Generic sort function by any key (city, state, zip)
    sortByKey(key) {
        return [...this.contacts].sort((a, b) => a[key].toString().localeCompare(b[key].toString()));
    }

    // Print all contacts
    printContacts(sortedContacts) {
        sortedContacts.forEach(person => console.log(person.toString()));
    }
}

// Example Usage
const myAddressBook = new AddressBook();

myAddressBook.addPerson(new Person("John Doe", "1234567890", "john@example.com", "New York", "NY", "10001"));
myAddressBook.addPerson(new Person("Jane Doe", "9876543210", "jane@example.com", "Los Angeles", "CA", "90001"));
myAddressBook.addPerson(new Person("Alice Brown", "5556667777", "alice@example.com", "Chicago", "IL", "60601"));
myAddressBook.addPerson(new Person("Bob Smith", "1112223333", "bob@example.com", "Houston", "TX", "77001"));

// Sorting by City
console.log("Sorted by City:");
myAddressBook.printContacts(myAddressBook.sortByKey("city"));

// Sorting by State
console.log("\nSorted by State:");
myAddressBook.printContacts(myAddressBook.sortByKey("state"));

// Sorting by Zip
console.log("\nSorted by Zip:");
myAddressBook.printContacts(myAddressBook.sortByKey("zip"));
