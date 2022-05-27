const EmployeeWorkDays = require('./employeeWorkDays');

const employeeWorkDays = new EmployeeWorkDays();

class EmployeeUtils {
	constructor() {}

	// Get employee schedules and return an object
	getEmployeeSchedules(linesOfFile) {
		const scheduleOfAllEmployees = {};

		linesOfFile.forEach((line) => {
			const employeeName = line.split('=')[0];
			const employeeSchedules = line.split('=')[1].split(',');

			scheduleOfAllEmployees[employeeName] = employeeSchedules;
		});

		return scheduleOfAllEmployees;
	}

	// Employees of the same time frame are obtained
	getSameTimeFrameEmployees(scheduleOfAllEmployees) {
		const results = {};

		// Iterate all times entered
		for (const employee in scheduleOfAllEmployees) {
			// Get the current employee's schedule
			const currentEmployeeSchedule = scheduleOfAllEmployees[employee];

			const keys = Object.keys(scheduleOfAllEmployees);

			// All employees that are different from the current one are filtered
			const filteredKeys = keys.filter((key) => key !== employee);

			// Iterate only employees other than the current one
			for (const otherEmployee of filteredKeys) {
				// Get the other employee's schedule
				const otherEmployeeSchedules = scheduleOfAllEmployees[otherEmployee];

				let count = 0;
				currentEmployeeSchedule.forEach((currentSchedule) => {
					// The days of work of the employee are obtained
					const [employeeWorkDay, employeeStartTime, employeeEndTime] = employeeWorkDays.getWorkDays(currentSchedule);

					otherEmployeeSchedules.forEach((otherSchedule) => {
						// the working days of the other employee are obtained
						const [otherEmployeeWorkDay, otherEmployeeStartTime, otherEmployeeEndTime] =
							employeeWorkDays.getWorkDays(otherSchedule);

						// Determine which employee enters first and the point at which the other employee started
						const limits =
							employeeStartTime <= otherEmployeeStartTime
								? { start: employeeStartTime, end: employeeEndTime, point: otherEmployeeStartTime }
								: { start: otherEmployeeStartTime, end: otherEmployeeEndTime, point: employeeStartTime };

						// It is evaluated if the employees are at the same time
						if (
							employeeWorkDay === otherEmployeeWorkDay &&
							limits.start <= limits.point &&
							limits.end >= limits.point
						) {
							count++;
						}
					});
				});

				// It is validated that the employees who were found at the same time are not repeated
				if (!(otherEmployee in results)) {
					results[employee] = {
						...results[employee],
						[otherEmployee]: count,
					};
				}
			}
		}

		return results;
	}
}

module.exports = EmployeeUtils;
