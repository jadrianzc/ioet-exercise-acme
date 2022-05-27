const EmployeeWorkDays = require('../../src/utils/employeeWorkDays');

describe('EmployeeWorkDays class tests', () => {
	const employeeWorkDays = new EmployeeWorkDays();

	test('getWorkDays returns an array with three elements', () => {
		const schedule = 'MO10:00-12:00';

		const workDay = employeeWorkDays.getWorkDays(schedule);

		expect(workDay).toBeInstanceOf(Array);
		expect(workDay.length).toBe(3);
	});
});
