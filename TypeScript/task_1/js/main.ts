interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
	return (firstName.charAt(0) + ". " + lastName)
};

interface printTeacherFunction {
	(firstName: string, lastName: string) : string;
}

interface StudentClassClass {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassconstructor {
	new (firstName: string, lastName: string): StudentClassClass;
}
class StudentClass {
	firstName: string;
	lastName: string;

		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		workOnHomework(): string {
			return "Currently working";
		}

		displayName():string {
			return this.firstName;
		}
}
