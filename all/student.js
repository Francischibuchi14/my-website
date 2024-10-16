let student = [
    {
        name : `Dave`,
        id : 1,
        age: 15,
        grade: {
            english : 50,
            math : 59,
            history : 60,
        }
    },
    {
        name : `Francis`,
        id : 2,
        age: 16,
        grade: {
            english : 50,
            math : 59,
            history : 60,
        }
    },
    {
        name : `John`,
        id : 3,
        age: 13,
        grade: {
            english : 50,
            math : 59,
            history : 60,
        }
    },
]
 function StudentId(id) {
    for (let y in student){
        let people = student[y];
        if (people.id == id) {
            return people;
        }
    }
 }
 let studentDetails = StudentId (2);
   
if ( console.log(`name =${studentDetails.name} \n id =${studentDetails.id}\n age =${studentDetails.age}` )) {

} else{
    console.log(`does not exist`)
}