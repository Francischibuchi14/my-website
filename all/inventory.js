let super_market_inventory =[
    {
        category: "brevrages",
        product_name:"milo",
        qauntity: 2000,
        price: 1000,
    },
    {
        category: "cars",
        product_name:"Prado",
        qauntity: 1000,
        price: 100000,
    },
    {
        category: "eletronics",
        product_name:"TV",
        qauntity: 3000,
        price: 300000,
    },
    {
        category: "gargets",
        product_name:"phones",
        qauntity: 4000,
        price: 100000,
    },
    {
        category: "phones",
        product_name:"samaungs",
        qauntity: 2000,
        price: 300000,
    }
]

console.log(super_market_inventory[0]);
console.log(super_market_inventory[1]);
console.log(super_market_inventory[2]);
console.log(super_market_inventory[3]);

let totalWorth = 0;

for (const item of super_market_inventory) {
  totalWorth += item.price * item.qauntity;
}

console.log(`Total Worth: ${totalWorth}`);