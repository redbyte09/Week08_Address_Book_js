class Person {
    constructor(name, phone, email, city, state) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.city = city;
        this.state = state;
    }

    // Overriding toString() method to display person details
    toString() {
        return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}, City: ${this.city}, State: ${this.state}`;
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

    // Sort persons alphabetically by name using Array.sort()
    sortByName() {
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Sort persons alphabetically by name using JavaScript ES6 functional approach
    sortByNameFunctional() {
        return [...this.contacts].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Print all contacts
    printContacts() {
        this.contacts.forEach(person => console.log(person.toString()));
    }
}

// Example Usage
const myAddressBook = new AddressBook();

myAddressBook.addPerson(new Person("John Doe", "1234567890", "john@example.com", "New York", "NY"));
myAddressBook.addPerson(new Person("Jane Doe", "9876543210", "jane@example.com", "Los Angeles", "CA"));
myAddressBook.addPerson(new Person("Alice Brown", "5556667777", "alice@example.com", "Chicago", "IL"));
myAddressBook.addPerson(new Person("Bob Smith", "1112223333", "bob@example.com", "Houston", "TX"));

// Sorting using Array.sort()
console.log("Sorted using Array.sort():");
myAddressBook.sortByName();
myAddressBook.printContacts();

// Sorting using JavaScript functional approach (without modifying the original list)
console.log("\nSorted using JavaScript functional approach:");
const sortedList = myAddressBook.sortByNameFunctional();
sortedList.forEach(person => console.log(person.toString()));
