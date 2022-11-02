import operate from './operate';

describe('should carry out operation given by the object', () => {
  test('should resturn 5', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });
  test('should resturn 0', () => {
    const result = operate(3, 3, '-');
    expect(result).toBe('0');
  });
  test('should resturn error', () => {
    const result = operate(3, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
/* test('should return Error: unkown operator', () => {
  const operation = 'v';
  const result = operate(3, 0, operation);
    expect(result).toBe("Unknown operation 'v'");
  }); */
});
