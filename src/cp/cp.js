import path from 'node:path';
import url from 'node:url';
import { spawn } from 'node:child_process';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKING_DIR = 'files';
const SCRIPT_FILE = 'script.js';
const SCRIPT_PATH = path.resolve(__dirname, WORKING_DIR, SCRIPT_FILE);

const spawnChildProcess = async (args) => {
  const child = spawn('node', [SCRIPT_PATH, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};
console.log('Try sent message to child. Type "CLOSE" to exit.\n');
spawnChildProcess(['one', 2, 'three', 4, 'five']);
