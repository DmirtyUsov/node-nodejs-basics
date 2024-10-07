import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_TO_READ = 'fileToRead.txt';
const FILE_TO_READ_PATH = path.resolve(__dirname, FILES_DIR, FILE_TO_READ);

const read = async () => {
  try {
    const fileHandler = await fs.open(FILE_TO_READ_PATH);
    const readableStream = fileHandler.createReadStream();
    readableStream.pipe(process.stdout);

  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
