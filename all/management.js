 // Store each book’s information (title, author, availability) in an array of objects. Each object 
 // should contain title (a string), author (a string), and isAvailable (a boolean indicating if the book 
 // is available).
 let library =[
     {
         Title: `Oga TiTi Must Go`,
         Author: `people of nigeria`,
         Availability: true,
     },
     {
         Title: `Oga TiTi Must Die`,
         Author: `Aberose ki`,
         Availability: true,
     },
     {
         Title: `There Is Peace In Nigeria`,
         Author: `Abino Nja`,
         Availability: true,
     },
     {
         Title: `Orange rabbit`,
         Author: `Francis`,
         Availability: true,
     },
 ]
 // Create a function addBook that takes the title and author as input and adds the book to the array.
 //  The isAvailable status should be set to true initially

// Function to add a book to the library
function addBook(title, author, year) {
    // Check if the book already exists in the library
    let bookExists = library.some(book => book.title === title && book.author === author);
    
    // If the book does not exist, add it to the library
    if (!bookExists) {
        const book = {
            title: title,
            author: author,
            year: year // Added year property for completeness
        };
        
        library.push(book);
        console.log(`Added: "${title}" by ${author}`);
    } else {
        console.log(`The book "${title}" by ${author} is already in the collection.`);
    }
}

// Example usage
addBook("Orange Rabbit", "Francis", 2023);  
console.log(library);


 // Borrow a book:
 // eate a function borrowBook that takes the title of a book as input. If the book is available (isAvailable: true), change its status to false and display a message that the book has been borrowed. If it’s already borrowed, display a message that the book is not available.
 function borrowBook(title){
     for (let index of library){
         if (index.Title == title){
             if(index.Availability == true){
                 index.Availability = false
                 return `book with title of ${title} has been borrowed successfully `
             }
         }
     }
     return `book is borrowed already `
 }
 console.log(borrowBook('Orange rabbit'))
 console.log(borrowBook('Orange rabbit'))
 // Display available books:
 // Create a function listAvailableBooks that lists all books that are available to borrow (i.e., isAvailable: true).
 // ---
 function listAvailableBooks (){
     let availablebooks = []
    for (let index of library){
     if (index.Availability === true){
         availablebooks.push(index)
     }
    }
    return availablebooks
 }
 console.log(listAvailableBooks())





// Task2::
// Store each product’s information (name, price, and quantity) in an array of objects. Each object should contain name (a string), price (a number), and quantity (the number of items added to the cart).
// Functionalities to Implement:
// Add product to cart:

 let Rstore =[
     {
         name: "Bread",
         price: 2000,
         quantity: "5"
     },
     {
         name: "Beans",
         price: 400,
         quantity: "7"
     },
     {
         name: "Rice",
         price: 1500,
         quantity: "4"
     },
     {
         name: "Garri",
         price: 4500,
         quantity: "3"
     },
 ]
// // Create a function addToCart that takes the product name, price,
// // and quantity as input. If the product already exists in the cart, increase the quantity. 
// // If it doesn’t exist, add a new product to the cart.
// // Remove product from cart:


  function addToCart() {
                    
}
