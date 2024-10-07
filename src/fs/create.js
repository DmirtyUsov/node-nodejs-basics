import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_NAME = 'fresh.txt';
const FILE_PATH = path.resolve(__dirname, FILES_DIR, FILE_NAME);

const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
  try {
      await fs.writeFile(FILE_PATH, FILE_CONTENT, { flag: 'wx' });
  } catch {
      throw new Error(ERROR_MESSAGE);
  }
};

await create();
