// Student Management System Object
// JavaScript Functions Part-2 and Object Literals
const StudentManagement = {
  students: [],  // Array to store student objects

  // Add a new student (object) to the students array
  addStudent(student, callback) {
    this.students.push(student);
    console.log(`Student ${student.name} added.`);
    if (callback) {
      callback();  // Callback function example
    }
  },

  // Calculate average marks of a student
  calculateAverage(student) {
    // Function scope: marks variable is local
    let total = 0;
    let count = 0;

    for (let subject in student.marks) {
      total += student.marks[subject];
      count++;
    }

    return (total / count).toFixed(2);  // Returns average rounded to 2 decimals
  },

  // Display all students with their average marks
  displayStudents() {
    console.log("\n--- Student List ---");
    this.students.forEach(student => {
      const avg = this.calculateAverage(student);
      console.log(`Name: ${student.name}, Age: ${student.age}, Average Marks: ${avg}`);
    });
  }
};

// Create some student objects (object literals)
const student1 = {
  name: "Amina",
  age: 15,
  marks: {
    math: 90,
    science: 95,
    english: 85
  }
};

const student2 = {
  name: "Rahim",
  age: 16,
  marks: {
    math: 75,
    science: 80,
    english: 70
  }
};

// Add students with a callback to display message
StudentManagement.addStudent(student1, () => {
  console.log("Callback: Student added successfully!\n");
});

StudentManagement.addStudent(student2);

// Display all students
StudentManagement.displayStudents();
