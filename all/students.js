// Array to store student data
let students = [];

// Function to update grades for a student
function updateGrades(studentId, subject, newGrade) {
    // Validate the new grade
    if (newGrade < 0 || newGrade > 100) {
        console.log('Invalid grade. Grade must be between 0 and 100.');
        return;
    }

    // Find the student by ID
    let student = students.find(s => s.id === studentId);
    if (!student) {
        console.log('Student ID not found.');
        return;
    }

    // Update the student's grade
    student.grades[subject] = newGrade;
    console.log(`Grade for ${subject} updated to ${newGrade}.`);
}

// Function to calculate the average grade for a student
function calculateAverage(studentId) {
    // Find the student by ID
    let student = students.find(s => s.id === studentId);
    if (!student) {
        console.log('Student ID not found.');
        return;
    }

    // Get all grades and calculate the average
    let grades = Object.values(student.grades);
    if (grades.length === 0) {
        console.log('No grades available for this student.');
        return;
    }

    let total = grades.reduce((sum, grade) => sum + grade, 0);
    let average = total / grades.length;
    return average;
}

// Function to determine if a student has passed or failed
function hasPassed(studentId) {
    let average = calculateAverage(studentId);
    if (average === undefined) return;

    return average >= 50 ? 'Passed' : 'Failed';
}

// Function to display all students with their average grades
function displayStudents() {
    students.forEach(student => {
        let average = calculateAverage(student.id);
        if (average !== undefined) {
            console.log(`Name: ${student.name}, Average Grade: ${average.toFixed(2)}, Status: ${hasPassed(student.id)}`);
        }
    });
}

// Sample student data
students.push({
    name: 'John Doe',
    id: '001',
    grades: {
        Math: 85,
        English: 78,
        History: 92
    }
});

students.push({
    name: 'Jane Smith',
    id: '002',
    grades: {
        Math: 55,
        English: 44,
        History: 65
    }
});
students.push({
    name: 'Jane Smith',
    id: '002',
    grades: {
        Math: 55,
        English: 44,
        History: 65
    }
});
students.push({
    name: 'Jane Smith',
    id: '002',
    grades: {
        Math: 55,
        English: 44,
        History: 65
    }
});
students.push({
    name: 'henry',
    id: '002',
    grades: {
        Math: 55,
        English: 44,
        History: 65
    }
});
students.push({
    name:'olodo',
    id: '002',
    grades: {
        Math: 30,
        English: 25,
        History: 50
    }
});


updateGrades('001', 'Math', 90); 
console.log(`olodo average grade: ${calculateAverage('001')}`); 
console.log(`henry status: ${hasPassed('002')}`); 
displayStudents(); 
