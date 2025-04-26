import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const FILE_NAME = 'fileToRead.txt';
const FILE_PATH = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const read = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, {
      encoding: 'utf8',
    });

    console.log(data);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
