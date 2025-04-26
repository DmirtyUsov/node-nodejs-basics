import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const DIR_PATH = path.resolve(__dirname, WORKING_DIR);

const list = async () => {
  try {
    const files = await fs.readdir(DIR_PATH);

    for (const file of files) {
      console.log(file);
    }
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
