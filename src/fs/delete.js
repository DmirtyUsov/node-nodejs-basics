import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_NAME = 'fileToRemove.txt';
const FILE_PATH = path.resolve(__dirname, FILES_DIR, FILE_NAME);

const remove = async () => {
   try {
    await fs.rm(FILE_PATH);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
