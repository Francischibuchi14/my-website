let cart = [
    {
        name: `apple`,
        price: 2000,
        quantity: 6
    },
    {
        name: `Banana`,
        price: 900,
        quantity: 10
    },
    {
        name: `garri`,
        price: 4500,
        quantity: 3
    },
    {
        name: `tomato tin`,
        price: 1500,
        quantity: 7
    },
];

function addToCart(name, price, quantity) {
    cart.push({ name, price, quantity });
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    return console.log(`the product $${item.name} was not found`)
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity),0 );
}

function listCart() {
    cart.forEach(item => {
        console.log(`Name: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}`);
    });
}


addToCart(`apple`,2000,6);
addToCart(`tomato tin`, 1500, 7);
listCart();
console.log(`Total Cost: $${calculateTotal()}`);
removeFromCart(`garri`,4500,3);
listCart();
console.log(`Total Cost: $${calculateTotal()}`);
