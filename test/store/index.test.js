const Store = require('../../src/store');
const path = require('path');

describe('Store class tests', () => {
	const store = new Store(path.join(__dirname, '../../exercise.txt'));

	test('Validate that the path is a txt file', () => {
		expect(store.filePath).toContain('.txt');
	});

	test('getFileContents returns an array', async () => {
		const linesOfFile = await store.getFileContents();

		expect(linesOfFile).toBeInstanceOf(Array);
	});

	test('getFileContents returns an array with the right string format', async () => {
		const linesOfFile = await store.getFileContents();

		expect(linesOfFile[0]).toMatch(/[A-Z]=[A-Z]{2}(\d{2})[:](\d{2})-(\d{2})[:](\d{2})/gi);
	});

	test('validateFile throws an error when fileContents is empty', () => {
		const fileContents = '';

		expect(() => {
			store.validateFile(fileContents);
		}).toThrow();
	});

	test('validateFile throws an error when the length of the fileContents is less than 5', () => {
		const fileContents = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00';

		expect(() => {
			store.validateFile(fileContents);
		}).toThrow();
	});

	test('formatFile remove every \\r', () => {
		const fileContents = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\r';
		const lineOfFile = store.formatFile(fileContents);

		expect(lineOfFile[0]).not.toContain('\r');
	});
});
