const Store = require('./store');
const EmployeeUtils = require('./utils/employeeUtils');
const Result = require('./utils/result');

const path = require('path');

(async () => {
	const store = new Store(path.join(__dirname, '../exercise.txt'));
	const employeeUtils = new EmployeeUtils();
	const result = new Result();

	const linesOfFile = await store.getFileContents();

	const scheduleOfAllEmployees = employeeUtils.getEmployeeSchedules(linesOfFile);

	const results = employeeUtils.getSameTimeFrameEmployees(scheduleOfAllEmployees);

	const finalOutput = result.formatResults(results);

	console.log(finalOutput);
})().catch((error) => console.error(error));
