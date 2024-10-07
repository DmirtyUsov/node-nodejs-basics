import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = "files";
const FILES_DIR_PATH = path.resolve(__dirname, FILES_DIR);
const ERROR_MESSAGE = "FS operation failed";

const list = async () => {
   try {
     const files = await fs.readdir(FILES_DIR_PATH);

     for (const file of files) {
       console.log(file);
     }
   } catch {
     throw new Error(ERROR_MESSAGE);
   }
};

await list();
