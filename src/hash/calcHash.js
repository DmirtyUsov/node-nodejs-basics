import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import crypto from 'node:crypto';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_NAME = 'fileToCalculateHashFor.txt';
const FILE_PATH = path.resolve(__dirname, FILES_DIR, FILE_NAME);

const getReadStreamFromFile = async (path) => {
  try {
    const fileHandle = await fs.open(path);

    return fileHandle.createReadStream();
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');

  const dataStream = await getReadStreamFromFile(FILE_PATH);

  dataStream.on('readable', () => {
    const content = dataStream.read();

    if (content) {
      hash.update(content);
    } 
  });

  dataStream.on('end', () => console.log(`0x${hash.digest('hex')}`));

};

await calculateHash();
