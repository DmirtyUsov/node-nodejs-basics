import fs from 'node:fs/promises';
import zlib from 'node:zlib';
import { PATH_ARCHIVE, PATH_FILE } from './constants.js';

const PATH_SRC = PATH_FILE;
const PATH_DST = PATH_ARCHIVE;

const compress = async () => {
  const fileHandler = await fs.open(PATH_SRC);
  const readableStream = fileHandler.createReadStream();

  const writeFileHandler = await fs.open(PATH_DST, 'w');
  const writableStream = writeFileHandler.createWriteStream();

  const gzip = zlib.createGzip();
  readableStream.pipe(gzip).pipe(writableStream);
};

await compress();
