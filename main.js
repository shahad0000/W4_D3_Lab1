let Book = {
    title: "The First Days",
    author: "Rhiannon Frater",
    year: " August 14, 2008",
    isAvailable: true,
    borrow() {
        return this.isAvailable ? !this.isAvailable : this.isAvailable
    },
    publisher: {
        name: "Tor Books",
        location: {
            city: "Texas",
            country: "United States"
        }
    }
}

console.log(Book);
console.log(Book.title);

let date = new Date()
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let today = date.getDate();
Book.year = `${currYear}-${currMonth}-${today}`;
console.log(Book);

delete Book.author;
console.log(Book);

console.log(Book.borrow())

console.log(Book.publisher)
console.log(Book.publisher.location.city);


