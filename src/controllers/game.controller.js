import { generateFirstGeneration, generateNewGeneration } from "../services/game.service";

export const getFirstGeneration = async (req, res, next) => {
  try {
    let { rowCount, colCount } = req.query;
    rowCount = parseInt(rowCount, 10);
    colCount = parseInt(colCount, 10);
    const resStateArr = await generateFirstGeneration(rowCount, colCount);

    await res.json({ data: resStateArr });
  } catch (error) {
    console.log(`Error getFirstGeneration: \n${error}`);
    next(error);
  }
};

export const getNewGeneration = async (req, res, next) => {
  try {
    let { rowCount, colCount } = req.query;
    rowCount = parseInt(rowCount, 10);
    colCount = parseInt(colCount, 10);
    const { data } = req.body;

    const resNewStateArr = await generateNewGeneration(rowCount, colCount, data);

    await res.json({ data: resNewStateArr });
  } catch (error) {
    console.log(`Error getNewGeneration: \n${error}`);
    next(error);
  }
};
