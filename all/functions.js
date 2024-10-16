let person =[
    {
        name: "francis",
        year: 2007,
        phone_number: +234857583839,
    },
    {
        name: "john",
        year: 2008,
        phone_number: +234036336837,
    },
    {
        name: "godwill",
        year: 2009,
        phone_number: +234868663834,
    }
]
/

function yearOfbrith(){
    for (let index in person) {
        console.log(person[index]);
        
    }
}