import fs from 'node:fs/promises';
import zlib from 'node:zlib';
import { PATH_ARCHIVE, PATH_FILE } from './constants.js';

const PATH_SRC = PATH_ARCHIVE;
const PATH_DST = PATH_FILE;

const decompress = async () => {
    const fileHandler = await fs.open(PATH_SRC);
    const readableStream = fileHandler.createReadStream();
  
    const writeFileHandler = await fs.open(PATH_DST, 'w');
    const writableStream = writeFileHandler.createWriteStream();
  
    const gunzip = zlib.createGunzip();
    readableStream.pipe(gunzip).pipe(writableStream);
};

await decompress();
