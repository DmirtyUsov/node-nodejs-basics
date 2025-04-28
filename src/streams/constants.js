import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const WORKING_DIR = 'files';
export const ERROR_MESSAGE = 'FS operation failed';
