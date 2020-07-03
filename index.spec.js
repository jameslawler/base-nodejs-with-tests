const test = require('./index');

describe('test', () => {
  describe('when true', () => {
    it('should return true', () => {
      expect(test(true)).toBe(true);
    });
  });
});
