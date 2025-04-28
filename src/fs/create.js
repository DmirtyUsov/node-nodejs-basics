import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const FILE_NAME = 'fresh.txt';
const FILE_PATH = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(FILE_PATH, FILE_CONTENT, { flag: 'wx' });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
