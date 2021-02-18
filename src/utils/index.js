export const generateSeed = (rowCnt, colCnt) => new Array(rowCnt)
  .fill(0)
  .map(() => new Array(colCnt).fill(0).map(() => (Math.random() > 0.5 ? 1 : 0)));

export const generateNewState = (rowIndex, colIndex, stateArr) => {
  const curState = parseInt(stateArr[rowIndex][colIndex], 10);
  const priorStateSum = [-1, 0, 1].reduce(
    (stateSum, rowOffset) => stateSum + [-1, 0, 1].reduce(
      (subStateSum, colOffset) => (
        subStateSum + ((rowIndex + rowOffset >= 0 && colIndex + colOffset >= 0 && Array.isArray(stateArr[rowIndex + rowOffset]))
        ? parseInt(stateArr[rowIndex + rowOffset][colIndex + colOffset] || 0, 10)
        : 0)
      ),
      0
    ),
    0
  );

  if ((curState === 1 && (priorStateSum === 3 || priorStateSum === 4)) || (curState === 0 && priorStateSum === 3)) {
    return 1;
  }

  return 0;
};

export const generateNewStateArr = (rowCnt, colCnt, stateArr) => stateArr
  .map((row, rowIndex) => row.map((cell, colIndex) => generateNewState(rowIndex, colIndex, stateArr)));

