import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';

const DIR_PATH = path.resolve(__dirname, WORKING_DIR);

const list = async () => {
  try {
    const dirEntries = await fs.readdir(DIR_PATH, { withFileTypes: true });

    const files = dirEntries
      .filter((entry) => entry.isFile())
      .map((file) => file.name);
    console.log(files);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
