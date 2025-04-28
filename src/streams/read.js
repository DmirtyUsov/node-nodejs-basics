import path from 'node:path';
import fs from 'node:fs/promises';
import { __dirname, WORKING_DIR } from './constants.js';

const FILE_NAME = 'fileToRead.txt';
const PATH_SRC = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const read = async () => {
  const srcHandler = await fs.open(PATH_SRC);
  const readableStream = srcHandler.createReadStream();
  readableStream.pipe(process.stdout);
  readableStream.on('end', () => process.stdout.write('\n\n'));
};

await read();
