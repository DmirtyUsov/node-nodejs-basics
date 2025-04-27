import path from 'node:path';
import fs from 'node:fs/promises';
import { __dirname, WORKING_DIR } from './constants.js';

const FILE_NAME = 'fileToWrite.txt';
const PATH_SRC = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const write = async () => {
  const writeFileHandler = await fs.open(PATH_SRC, 'w');
  const writableStream = writeFileHandler.createWriteStream();

  process.stdin.pipe(writableStream);
};

await write();
