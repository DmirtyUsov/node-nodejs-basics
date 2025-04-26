import path from 'node:path';
import fs from 'node:fs/promises';

import { __dirname, ERROR_MESSAGE, WORKING_DIR } from './constants.js';
const PATH_SRC = path.resolve(__dirname, WORKING_DIR);
const DST_DIR = 'files_copy';
const PATH_DST = path.resolve(__dirname, DST_DIR);

const copy = async () => {
  try {
    await fs.mkdir(PATH_DST);

    const dirEntries = await fs.readdir(PATH_SRC, { withFileTypes: true });

    const copyPromises = dirEntries
      .filter((entry) => entry.isFile())
      .map((file) =>
        fs.copyFile(
          path.resolve(__dirname, PATH_SRC, file.name),
          path.resolve(__dirname, PATH_DST, file.name),
          fs.constants.COPYFILE_EXCL
        )
      );

    await Promise.all(copyPromises);
  } catch (error) {
    throw Error(ERROR_MESSAGE);
  }
};

await copy();
