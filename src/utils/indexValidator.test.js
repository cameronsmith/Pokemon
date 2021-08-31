import indexValidator from './indexValidator';

test('is limits being applied', async () => {
  expect(indexValidator(-1, 10)).toBeFalsy();
  expect(indexValidator(0, 10)).toBeTruthy();
  expect(indexValidator(10, 10)).toBeTruthy();
  expect(indexValidator(11, 10)).toBeFalsy();
});