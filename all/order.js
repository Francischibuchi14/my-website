let resturant=[
        {
            name:
             "Burger", 
             price: 10.00

        },
        {
            name:
             "Fries",
             price: 3.00
            },
        {
            name:
             "Salad", 
             price: 7.00
            },
        {
            name: 
            "Soda",
             price: 1.50},
        {
            name: 
            "Pizza", 
            price: 12.00}
]

function takeOrder(customerId,orders){
    let placedOrder = [];
    orders.forEach(order => {
        let item = resturant.find(list => list.name.toUpperCase() === order.toUpperCase())
        if(item){
            placedOrder.push({customerId,...item})
        }else{
            console.log(`${order} is not available in our menue`)
        }
    });
    return placedOrder;
}
let id = "CUS001"
let order = ["fries","pizza","soda","suga corn"]
let listOfOrder = takeOrder(id,order)
console.log(listOfOrder)


function calculateOrder(customerId,orders){
    let placedOrder = [];
    let total = 0
    orders.forEach(order => {
        let item = resturant.find(list => list.name.toUpperCase() === order.toUpperCase())
        if(item){
            placedOrder.push({...item})
            total +=item.price
        }else{
            console.log(`${order} is not in our menue please pick another`)
        }
    });
    return {customerId,items: placedOrder, total}
}
order = ["soda","pizza","Burger","suga corn"]
id = "CUS001"
let total = calculateOrder(id,order)
console.log(total)

