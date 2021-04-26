console.log("Welcome To Address Book")
class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }

    get firstName() { 
        return this._firstName; 
    }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else throw 'First Name is Incorrect !';
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = this.lastName;
        else throw 'Last Name is Incorrect !';
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('[A-Za-z]{4,}$');
        if(addressRegex.test(address))
        this._address = this.address;
        else throw 'Address is Incorrect !';
    }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('[A-Za-z]{4,}$');
        if(cityRegex.test(city))
        this._city = city;
        else throw 'City is Incorrect !';
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('[A-Za-z]{4,}$');
        if(stateRegex.test(state))
        this._state = state;
        else throw 'State is Incorrect !';
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else throw 'zip is Incorrect !';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = this.phoneNumber;
        else throw 'Phone Number is Incorrect !';
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email))
        this._email = this.email;
        else throw 'Email is Incorrect !'
    }

    toString() {
        return "FirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}

let addressBook = new AddressBook("Laksh", "Mehta", "Ramnagar", "Khandwa", "Madhya pradesh", 450001, 1234567890, "lakshmehta06@gmail.com");
console.log(addressBook.toString());
let addressBook1 = new AddressBook("Priya", "Thakur", "Math", "Vengurle", "Maharashtra", 432129, 6715324562, "Priya@ab.dgf.df");
console.log(addressBook1.toString());
try {
    addressBook1.firstName = "pr";
    console.log(addressBook1.toString());
} catch (e) {
    console.error(e);
}
let addressBook2 = new AddressBook("Jignesh", "Tambade", "Saigaon", "Raigad", "Maharashtra", 435657, 9028363759,"jignesht5555@Sgmail.com",);
let addressBookArray= new Array();
addressBookArray.push(addressBook1);
addressBookArray.push(addressBook2);
console.log("\nNew Contact Added to Array " +addressBookArray);

const prompt = require('prompt-sync')({sigint: true});

function editPerson() {
let userInput = prompt("Enter name to update Contact : ");

addressBookArray.forEach(addressBook => {
    if(addressBook.firstName == userInput) {
    console.log("1.PhoneNumber" + "\n2.Address" + "\n3.quit");
    var choice = prompt("Select any option to edit :")

    switch(choice) {
        case "1" :
            phoneNumber = prompt("Enter new Phone Number :");
            addressBook.phoneNumber = phoneNumber;
            console.log(addressBook.toString());
            console.log("Phone number updated")
        
            break;
        case "2" :
            city = prompt("Enter new city : ");
            addressBook.city = city;
            console.log(addressBook.toString());

            state = prompt("Enter new state : ");
            addressBook.state = state;
            console.log(addressBook.toString());

            zip = prompt("Enter new zip : ");
            addressBook.zip = zip;
            console.log(addressBook.toString());
            break;
        default :
            console.log("Incorrect choice");
            break;
    }  
}
}); 
}

editPerson();



function deleteContact() {
    let userInput = prompt("Enter name to Delete Entry : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.firstName == userInput) {
            addressBookArray.splice(addressBookArray.indexOf(addressBook), 1)
            console.log("Record Deleted");
            console.log(addressBookArray);
        }
    });
}

deleteContact();

function numberOfContact() {
    let totalCount =  addressBookArray.reduce(((totalCount) => { totalCount +=1; return totalCount; }), 0);
    console.log("Total Number of Contacts in AddressBook : " +totalCount);
}

numberOfContact();
function duplicateEntry() {
    let userInput = prompt("Enter name to check Entry in addressbook : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.firstName == userInput) {
            console.log("Contact already exists in the book");
        } else {
            console.log("Contact not exists in the book");
        }
});
}
duplicateEntry();


function searchbyCityOrState() {
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.city == inputCity || addressBook.state == inputState) {
            console.log("Person in city " +inputCity+ " and state " +inputState);
        }
    });
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.forEach(contact => console.log(addressBookArray));
}

searchbyCityOrState();

function viewByCityOrState() {
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    if(addressBookArray.some(contact => contact.city == inputCity && contact.state == inputState)) {
        console.log("Person in city " +inputCity+ " and state " +inputState);
        }
        addressBookArray.filter(contact => contact.city == inputCity && contact.state == inputState)
        addressBookArray.forEach(contact => console.log(addressBookArray));
}

viewByCityOrState();


function countByCity(city) {
    return addressBookArray.filter(contact => contact.city == city).reduce((count, contact) => count += 1, 0);
}
function countByState(state) {
    return addressBookArray.filter(contact => contact.state == state).reduce((count, contact) => count += 1, 0)
}
console.log("number of Person in city " +countByCity("Virar"));
console.log("number of Person in state " +countByState("Maharashtra"));
