class EmployeeWorkDays {
	constructor() {}

	// Function that returns the days, the minutes of entry and exit of the employee
	getWorkDays(schedule) {
		// You get the day you work
		const employeeWorkDay = schedule.slice(0, 2);

		//You get the time you work
		const employeeTimeWorked = schedule.replace(/[a-zA-Z]/gi, '');

		// Extract input time and convert to date
		const startDate = new Date(`1/1/2020 ${employeeTimeWorked.split('-')[0]}`);
		// Conversion from hour to minutes
		const minutesFromHourStart = startDate.getHours() * 60 + startDate.getMinutes();

		// Output time is extracted and converted to date
		const endDate = new Date(`1/1/2020 ${employeeTimeWorked.split('-')[1]}`);
		// Conversion from hour to minutes
		const minutesFromHourEnd = endDate.getHours() * 60 + endDate.getMinutes();

		return [employeeWorkDay, minutesFromHourStart, minutesFromHourEnd];
	}
}

module.exports = EmployeeWorkDays;
