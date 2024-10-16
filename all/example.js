let bookInventory = [
    {
        title: 'Without a silver spoon',
        author: 'Mr A',
        ISBN: 'ISBN0011',
        price: 2000,
        stockQuantity: 5
    },
    {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        ISBN: 'ISBN0002',
        price: 5000,
        stockQuantity: 0
    },
    {
        title: 'Arrow of God',
        author: 'Chinua Achebe',
        ISBN: 'ISBN0003',
        price: 4000,
        stockQuantity: 8
    },
    {
        title: 'Purple Hibiscus',
        author: 'Chimamanda Ngozi',
        ISBN: 'ISBN0004',
        price: 6000,
        stockQuantity: 8
    },
    {
        title: 'Lion and the Jewel',
        author: 'Wole Soyinka',
        ISBN: 'ISBN0005',
        price: 10000,
        stockQuantity: 50
    }
];

/* Update book with wrong ISBN 0011 and quantity
    with the ISBN0001 and quantity 15
*/

for (let index in bookInventory) {
    let book = bookInventory[index];

    if (book.ISBN == 'ISBN0011') {
        book.ISBN = 'ISBN0001';
        book.stockQuantity = 15;

        console.log(`Book ${book.title} has been updated to ${book.ISBN} and quantity ${book.stockQuantity}`)
        break;
    }
}

for (let index in bookInventory) {
    let book = bookInventory[index];

    if (book.stockQuantity > 0) {
        console.log(`Book ${index}\nTitle: ${book.title} \nISBN: ${book.ISBN} \nAuthor: ${book.author} \nQty: ${book.stockQuantity} \nPrice:${book.price}`);
        console.log('----------------');
    }
}