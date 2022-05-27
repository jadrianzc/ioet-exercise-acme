const EmployeeUtils = require('../../src/utils/employeeUtils');

describe('EmployeeUtils class tests', () => {
	const employeeUtils = new EmployeeUtils();

	test('getEmployeeSchedules returns an object', () => {
		const linesOfFile = [
			'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
			'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
			'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
		];
		const scheduleOfAllEmployees = employeeUtils.getEmployeeSchedules(linesOfFile);

		expect(scheduleOfAllEmployees).toBeInstanceOf(Object);
	});

	test('getSameTimeFrameEmployees returns an object with the number of times the employees met', () => {
		const scheduleOfAllEmployees = {
			RENE: ['MO10:00-12:00', 'TU10:00-12:00', 'TH01:00-03:00', 'SA14:00-18:00', 'SU20:00-21:00'],
			ASTRID: ['MO10:00-12:00', 'TH12:00-14:00', 'SU20:00-21:00'],
			ANDRES: ['MO10:00-12:00', 'TH12:00-14:00', 'SU20:00-21:00'],
		};
		const result = employeeUtils.getSameTimeFrameEmployees(scheduleOfAllEmployees);

		expect(result).toEqual({ RENE: { ASTRID: 2, ANDRES: 2 }, ASTRID: { ANDRES: 3 } });
	});
});
