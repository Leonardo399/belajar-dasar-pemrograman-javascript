const {
  averageExams
} = require('./gradeCalculations.js');

test('it should return exact average', () => {
  const listValueOfExams = [80, 100, 100, 80];
  expect(averageExams(listValueOfExams)).toEqual(90);
});