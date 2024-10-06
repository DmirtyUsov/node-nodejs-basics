import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = "files";
const ERROR_MESSAGE = "FS operation failed";

const FILE_NAME = 'fileToRead.txt';
const FILE_PATH = path.resolve(__dirname, FILES_DIR, FILE_NAME);

const read = async () => {
   try {
     const data = await fs.readFile(FILE_PATH, {
       encoding: 'utf8',
     });

     console.log(data);
   } catch {
     throw new Error(ERROR_MESSAGE);
   }
};

await read();
