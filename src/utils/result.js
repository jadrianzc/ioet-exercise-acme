class Result {
	constructor() {}

	// The object is formatted to display the final result
	formatResults(results) {
		let finalOutput = '';

		for (const employeeName in results) {
			const matchingEmployees = results[employeeName];

			for (const otherEmployeeName in matchingEmployees) {
				const employeeCount = matchingEmployees[otherEmployeeName];

				finalOutput += `${employeeName}-${otherEmployeeName}:${employeeCount}\n`;
			}
		}

		return finalOutput;
	}
}

module.exports = Result;
