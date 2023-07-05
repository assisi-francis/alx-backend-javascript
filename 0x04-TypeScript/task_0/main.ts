// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "New York",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Iterate over the students and create rows for the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  // Create cells for first name and location
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  // Set the text content of the cells
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the document body
document.body.appendChild(table);
