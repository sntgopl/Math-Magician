import { isNumber, calculate } from './calculate';

describe('test on isNumber function to check if input is a number', () => {
  test('should return false as "a" is not a number', () => {
    const string = 'a';
    const result = isNumber(string);
    expect(result).toBe(false);
  });

  test('should return true as "2" is a number', () => {
    const string = '2';
    const result = isNumber(string);
    expect(result).toBe(true);
  });

  test('should return true as "4" is a number', () => {
    const string = '4';
    const result = isNumber(string);
    expect(result).toBe(true);
  });
});

describe('test on calculate function to check if the object returned is correct', () => {
  test('if button selected is a number, total should be placed as number', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(object, '2');
    expect(result.next).toBe('2');
    expect(result.total).toBe(null);
  });
  test('if button selected is an operation and "next" is a number should return object with operation', () => {
    const object = {
      total: 0,
      next: '2',
      operation: null,
    };
    const result = calculate(object, '-');
    expect(result.total).toBe('2');
    expect(result.next).toBe(null);
    expect(result.operation).toBe('-');
  });
  test('if button selected is "=" and we have already two numbers and operation should return result', () => {
    const object = {
      total: '2',
      next: '2',
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('0');
  });
  test('if button selected is "AC" and we have already a value in operation or total or next, should return object to null', () => {
    const object = {
      total: '2',
      next: '3',
      operation: '-',
    };
    const result = calculate(object, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
});
