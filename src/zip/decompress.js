import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';
import zlib from 'node:zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_TO_DECOMPRESS = 'fileToCompress.txt';
const FILE_TO_DECOMPRESS_PATH = path.resolve(
  __dirname,
  FILES_DIR,
  FILE_TO_DECOMPRESS
);

const FILE_ARCHIVE = 'archive.gz';
const FILE_ARCHIVE_PATH = path.resolve(__dirname, FILES_DIR, FILE_ARCHIVE);

const decompress = async () => {
  try {
    const fileHandler = await fs.open(FILE_TO_DECOMPRESS_PATH, 'w');
    const writableStream = fileHandler.createWriteStream();

    const readFileHandler = await fs.open(FILE_ARCHIVE_PATH);
    const readableStream = readFileHandler.createReadStream();
    
    const gunzip = zlib.createGunzip();
    readableStream.pipe(gunzip).pipe(writableStream);
  } catch() {
    
    throw new Error(ERROR_MESSAGE);
  }
};

await decompress();
