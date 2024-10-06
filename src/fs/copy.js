import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const FILES_COPY_DIR = 'files_copy';
const FILES_PATH = path.resolve(__dirname, FILES_DIR);

const FILES_COPY_PATH = path.resolve(__dirname, FILES_COPY_DIR);


const copy = async () => {
  try {
    await fs.access(FILES_PATH);

		await fs.mkdir(FILES_COPY_PATH);

		const dirEntries = await fs.readdir(FILES_PATH, { withFileTypes: true });

    const copyPromises = dirEntries
      .filter((entry) => entry.isFile())
      .map((file) =>
        fs.copyFile(
          path.resolve(__dirname, FILES_DIR, file.name),
          path.resolve(__dirname, FILES_COPY_DIR, file.name),
          fs.constants.COPYFILE_EXCL
        )
      );

    await Promise.all(copyPromises);
  } catch {
		
    	throw Error(ERROR_MESSAGE);
  }
};

await copy();
