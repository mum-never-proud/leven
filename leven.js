function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('minimum edit distance can be compared only between strings');
  }
}

module.exports = function(a, b) {
  assertString(a);
  assertString(b);

  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  const distanceMatrix = Array(b.length).fill(0).map(() => Array(a.length).fill(0));

  for (let i = 0; i < b.length; i++) {
    distanceMatrix[i][0] = i;
  }

  for (let i = 0; i < a.length; i++) {
    distanceMatrix[0][i] = i;
  }

  for (let i = 1; i < b.length; i++) {
    for (let j = 1; j < a.length; j++) {
      const replaceCost = a[j - 1] === b[i - 1] ? 0 : 1;

      distanceMatrix[i][j] = Math.min(
        distanceMatrix[i][j - 1] + 1, // insertion
        distanceMatrix[i - 1][j] + 1, // deletion
        distanceMatrix[i - 1][j - 1] + replaceCost // replace
      );
    }
  }

  return distanceMatrix[b.length - 1][a.length - 1];
}
