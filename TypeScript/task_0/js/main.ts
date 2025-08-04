interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Pouet",
	lastName: "Clarisse",
	age: 27,
	location: "Cenon",
}
const student2: Student = {
	firstName: "Pouet",
	lastName: "Alex",
	age: 28,
	location: "Bordeaux",
}
const studentsList = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});

document.body.appendChild(table);
