const leven = require('../leven');

describe('leven', () => {
  it('should throw TypeError when one of the inputs is not a string', () => {
    expect(() => leven()).toThrow(TypeError);
    expect(() => leven('monkey')).toThrow(TypeError);
    expect(() => leven({}, 'pokemon')).toThrow(TypeError);
  });

  it('should return length of first param when second param is empty', () => {
    expect(leven('monkey', '')).toEqual(6);
  });

  it('should return length of second param when first param is empty', () => {
    expect(leven('', 'monkey')).toEqual(6);
  });

  it('should compute leven minimum edit distance of given string', () => {
    expect(leven('money', 'monkey')).toEqual(1);
    expect(leven('kitten', 'sitting')).toEqual(3);
  });
});
