const { addition, subtraction } = require('./index');

describe('addition', () => {
  describe('when adds 1 + 2', () => {
    it('should return 3', () => {
      expect(addition(1, 2)).toBe(3);
    });
  });
});

describe('subtraction', () => {
  describe('when subtracts 5 - 1', () => {
    it('should return 4', () => {
      expect(subtraction(5, 1)).toBe(4);
    });
  });
});
