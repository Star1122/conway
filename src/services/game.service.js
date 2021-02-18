import History from '../models/history.model';
import { generateNewStateArr, generateSeed } from '../utils';

const mapHistory = (rowCount, colCount, priorStates, newStates, isFirstGeneration) => ({
  isFirstGeneration,
  rowCount,
  colCount,
  priorStates: priorStates.map((subState) => subState.join('')),
  newStates: newStates.map((subState) => subState.join('')),
});

export const generateFirstGeneration = async (rowCount, colCount) => {
  const newArr = generateSeed(rowCount, colCount);
  const newStateArr = generateNewStateArr(rowCount, colCount, newArr);

  const history = new History(mapHistory(colCount, rowCount, newArr, newStateArr, true));
  await history.save();

  return newStateArr;
};

export const generateNewGeneration = async (rowCount, colCount, stateArr) => {
  const newStateArr = generateNewStateArr(rowCount, colCount, stateArr);

  const history = new History(mapHistory(colCount, rowCount, stateArr, newStateArr, false));
  await history.save();

  return newStateArr;
};
