let cars = [
    {
        car_name:"HONDA",
        price: 3000000,
        quantity: 12
    },
    {
        car_name:"BUGATTI",
        price: 1200000000,
        quantity: 3
    },
    {
        car_name:"CHEVOLET",
        price: 250000000,
        quantity: 7
    },
    {
        car_name:"MECEDIES",
        price: 3500000,
        quantity: 10
    },
    {
        car_name:"LAMBOHGIHINI",
        price: 30000000,   
        quantity: 8
    },
]
function addToCart(cartype,price,quantity){
    let availables = cars.find(goods => goods.name === cartype);
    if(availables){
        availables.quantity+= quantity
    }else{
        let newarrival = {
            name,
            price,
            quantity
        }
        cars.push(newarrival)
    }
    return cars
}
let name = "MECEDIES"
let price = 3500000
let quantity = 10
let item = addToCart(name,price,quantity)
console.log(item)
console.log(".................................")
// removing product from cart
function removeFromCart(name){
    let carsindex = cars.find(goods =>goods.car_name)
    if(carsindex !== -1){
        cars.splice (carsindex,0)
        return `removed ${name} from the car to be exported `
    }else{
        return `product not found`
    }
}
name = "MECEDIES"
let removed = removeFromCart(name)
console.log(removed)
console.log(".................................")
function calculateTotal(){
   cars.forEach(goods => {
    let total = goods.price * goods.quantity;
    console.log (`Name: ${goods.car_name}\n Total: ${total}`)
   })
}
calculateTotal(cars)