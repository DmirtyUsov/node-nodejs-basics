import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const PROPER_FILE_NAME = 'properFilename.md';
const PROPER_FILE_PATH = path.resolve(__dirname, WORKING_DIR, PROPER_FILE_NAME);

const WRONG_FILE_NAME = 'wrongFilename.txt';
const WRONG_FILE_PATH = path.resolve(__dirname, WORKING_DIR, WRONG_FILE_NAME);

const rename = async () => {
  try {
    await fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
