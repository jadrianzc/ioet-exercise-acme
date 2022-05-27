const fs = require('fs/promises');

class Store {
	constructor(filePath) {
		this.filePath = filePath;
	}

	// Reading the input file
	async getFileContents() {
		const fileContents = await fs.readFile(this.filePath, { encoding: 'utf8' });

		const linesOfLine = this.validateFile(fileContents);
		return linesOfLine;
	}

	validateFile(fileContents) {
		if (fileContents.length === 0) {
			throw new Error('El archivo de horarios proporcionado está vació.');
		}

		const linesOfFile = this.formatFile(fileContents);

		if (linesOfFile.length < 5) {
			throw new Error('El archivo de horarios proporcionado debe contener los horarios de al menos 5 empleados.');
		}

		return linesOfFile;
	}

	formatFile(fileContents) {
		const linesOfFile = fileContents.replaceAll('\r', '').split('\n');
		return linesOfFile;
	}
}

module.exports = Store;
