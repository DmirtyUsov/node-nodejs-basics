import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const FILE_NAME = 'fileToRemove.txt';
const FILE_PATH = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const remove = async () => {
  try {
    await fs.rm(FILE_PATH);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
