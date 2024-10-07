import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_TO_WRITE = 'fileToWrite.txt';
const FILE_TO_WRITE_PATH = path.resolve(__dirname, FILES_DIR, FILE_TO_WRITE);

const write = async () => {
 try {

  const writeFileHandler = await fs.open(FILE_TO_WRITE_PATH, 'w');
  const writableStream = writeFileHandler.createWriteStream();
  
  process.stdin.pipe(writableStream);
 } catch {
   throw new Error(ERROR_MESSAGE);
 }
};

await write();
