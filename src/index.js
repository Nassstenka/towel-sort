module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let result = new Array();
  let matrixSize = matrix.length;
  if (matrixSize === 0) return [];
  let oneStringSize;
  let direction = 1;
  let index = 0;

  for (let i = 0; i < matrixSize; i++) {
    oneStringSize = matrix[i].length;
    if (direction === 1) {
      for (let j = 0; j < oneStringSize; j++) {
        result[index] = matrix[i][j];
        index++;
      }
      direction = 0;
    }
    else {
      for (let j = oneStringSize - 1; j >= 0; j--) {
        result[index] = matrix[i][j];
        index++;
      }   
      direction = 1;   
    }
  }

  return result;
}
