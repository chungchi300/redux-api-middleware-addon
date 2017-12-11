import * as Action from 'action';
import sandWichNo from './';
test('addOrder', () => {
  expect(sandWichNo(undefined, Action.addSandWich())).toBe(2);
  expect(sandWichNo(2, Action.addSandWich())).toBe(4);
});
