/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let first, second, third, triangles;
  triangles = 0;

  for (i = 0; i < preferences.length - 1; i++) { 
    first = i;

    second = preferences[first] - 1; // -1 used to match persons position (item value) in the to its real position in the array 

    third = preferences[second] - 1;

    // there is an assumption that every person eather belong to the triangle or doesn't, so all already checked persons were excluded from further evaluation
    if ((preferences[third] - 1) === first && third > first && third > second) {
      triangles++;
    }
  }

  return triangles;
};
