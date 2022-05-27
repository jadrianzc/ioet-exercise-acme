const Result = require('../../src/utils/result');

test('formatResults returns an string with the right format', () => {
	const result = new Result();

	const results = { RENE: { ASTRID: 2, ANDRES: 2 }, ASTRID: { ANDRES: 3 } };
	const finalOutput = result.formatResults(results);

	expect(finalOutput).toContain('RENE-ASTRID:2');
});
