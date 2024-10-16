let students = [
    {
        name: "francis",
        id: 1,
        age: 13,
        subjects:{
            english:39,
            math: 50,
            history: 60,
            civic: 70,
        },
    },
    {
        name: "chibike",
        id: 2,
        age: 12,
        subjects:{
            english:60,
            math: 55,
            history: 30,
            civic: 20,
        },
    },
    {
        name: "henry",
        id: 4,
        age: 16,
        subjects:{
            english:29,
            math: 19,
            history: 70,
            civic: 80,
        },
    },
    {
        name: "Dave",
        id: 5,
        age: 14,
        subjects:{
            english:92,
            math: 75,
            history: 50,
            civic: 46,
        },
    },
]
 //  we want to check the score of a student
 function checkScore( studentId, subject){
     // we want to loop through the entire array
         for (let x in students ){
             let grade = students[x];
             if (grade.id == studentId){
                 if (grade.subjects[subject] !== undefined){
                     return grade.subjects[subject]
                 }
                 else{
                    return `subject ${subject} is not available for student with studentId of ${studentId}`
                }
            } 
        }
        // this message is shown if no student is found
        return `student with id number ${studentId} is not found`
}
let studentId = 4;
let subject = `english`
 console.log(checkScore(studentId, subject));
  //number 2e

function hugSfar(de) {
    for(let index in students){
        let people = students[index]
        let grade = people.grade
        let total = 0
        for(let subject in grade ){
            total += grade[subject]
        }
    }
    if(students.Id === id){
        let average = total/4
        return average;
    }
}
id = 4
let mark = hugSfar(id)
console.log(mark);

