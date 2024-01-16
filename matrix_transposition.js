const transpose = function(matrix) {
  let returnMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) { // looping through every row
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) { //looping through every colum
      if (returnMatrix[columnIndex] === undefined) {
        returnMatrix[columnIndex] = [];
      }
      returnMatrix[columnIndex][rowIndex] = matrix[rowIndex][columnIndex]; // swapping to columnindex, rowindex (from rowindex,column index)
    }
  }
  return returnMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

//test

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// ----
// 1 3 5
// 2 4 6
// ----
// 1
// 2
// 3
// 4
// 5
// 6
// 7

