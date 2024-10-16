let attendance= [
    "okeke francis",
    "benard ihorm",
    "jokrer googan",
    "Robin hood",
    "davido",
    "burna boy"
]


function addGuests(Name){
    let new_guests = Name
    let position = attendance.indexOf(attendance)
    if(!attendance.includes(new_guests)){
        attendance.push(new_guests);
        console.log(`${new_guests} has been added`)
    }else{
        console.log(`${new_guests}  already exist, do you want to keep or replace the existing data`)
    }
    return attendance.forEach(((Element,position)=>console.log(`${position} ${Element}`)));
}


let Names = (["okeke francis",])
addGuests(Names)
console.log("       ")


function searchGuestName(name){
    let position = attendance.indexOf(name)
   if(attendance.includes(name)){
    return {name: name, position: position}
   }else{
    return "Name is not among list";
   }
}
let Name = "Robin hood" 
let replace = searchGuestName(`${Name}`);
console.log(replace)
console.log("   ")


function listOfGuests(){
    return attendance.join(" ,")
}
let list = listOfGuests(attendance)
console.log(list)
console.log(" ")

function removeFromList(name){
    let upperCaseName = name.toUpperCase();
    let index = attendance.findIndex(name => name.toUpperCase() === upperCaseName);
    if(index !== -1){
        attendance.splice(index,1)
        return `${name} removed`
    }else{
        return `${name} not in list`
    }
    
}
let birthName = "Robin hood"
let removed = removeFromList(birthName)
console.log(removed)