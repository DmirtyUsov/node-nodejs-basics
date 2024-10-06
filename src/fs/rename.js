import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = "files";
const ERROR_MESSAGE = "FS operation failed";

const PROPER_FILE_NAME = "properFilename.md";
const PROPER_FILE_PATH = path.resolve(__dirname, FILES_DIR, PROPER_FILE_NAME);
const WRONG_FILE_NAME = "wrongFilename.txt";
const WRONG_FILE_PATH = path.resolve(__dirname, FILES_DIR, WRONG_FILE_NAME);

const checkFileExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
   try {
    const isProperFileExists = await checkFileExists(PROPER_FILE_PATH);
    if (isProperFileExists) {
      throw new Error();
    }

    await fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }

};

await rename();