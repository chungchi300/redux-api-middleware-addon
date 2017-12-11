import {double} from 'helpers/weightCalculation';
import {total} from 'helpers/priceCalculation';
test('total', () => {
  expect(total(2 * 100, 0.8)).toBe(160);
  expect(double(100)).toBe(200);
});
