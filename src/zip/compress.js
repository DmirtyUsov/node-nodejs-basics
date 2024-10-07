import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';
import zlib from 'node:zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILE_TO_COMPRESS = 'fileToCompress.txt';
const FILE_TO_COMPRESS_PATH = path.resolve(
  __dirname,
  FILES_DIR,
  FILE_TO_COMPRESS
);

const FILE_ARCHIVE = 'archive.gz';
const FILE_ARCHIVE_PATH = path.resolve(
  __dirname,
  FILES_DIR,
  FILE_ARCHIVE
);

const compress = async () => {
  try {
    const fileHandler = await fs.open(FILE_TO_COMPRESS_PATH);
    const readableStream = fileHandler.createReadStream();

    const writeFileHandler = await fs.open(FILE_ARCHIVE_PATH, 'w');
    const writableStream = writeFileHandler.createWriteStream();
    
    const gzip = zlib.createGzip();
    readableStream.pipe(gzip).pipe(writableStream);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await compress();