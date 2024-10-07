import path from 'node:path';
import url from 'node:url';
import { spawn } from "node:child_process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = 'files';
const FILE_NAME = 'script.js';
const FILES_DIR_PATH = path.resolve(__dirname, FILES_DIR, FILE_NAME);


const spawnChildProcess = async (args) => {
  const child = spawn('node', [FILES_DIR_PATH, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['one', 2, 'three', 4, 'five']);
