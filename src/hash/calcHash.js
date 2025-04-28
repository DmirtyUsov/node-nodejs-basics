import path from 'node:path';
import url from 'node:url';
import crypto from 'node:crypto';
import fs from 'node:fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKING_DIR = 'files';
const FILE_NAME = 'fileToCalculateHashFor.txt';
const PATH_SRC = path.resolve(__dirname, WORKING_DIR, FILE_NAME);

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const readableStream = fs.createReadStream(PATH_SRC, { encoding: 'utf-8' });

  readableStream.on('readable', () => {
    const content = readableStream.read();

    if (content) {
      hash.update(content);
    }
  });

  readableStream.on('end', () => console.log(`0x${hash.digest('hex')}`));
};

await calculateHash();
