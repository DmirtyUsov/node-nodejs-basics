import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const WORKING_DIR = 'files';
export const ERROR_MESSAGE = 'FS operation failed';

const FILE_TO_COMPRESS = 'fileToCompress.txt';
export const PATH_FILE = path.resolve(__dirname, WORKING_DIR, FILE_TO_COMPRESS);

const FILE_ARCHIVE = 'archive.gz';
export const PATH_ARCHIVE = path.resolve(__dirname, WORKING_DIR, FILE_ARCHIVE);