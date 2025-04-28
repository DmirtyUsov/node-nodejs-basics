import path from 'node:path';
import url from 'node:url';
import os from 'node:os';
import { Worker } from 'node:worker_threads';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKER_FILE = 'worker.js';
const WORKER_PATH = path.resolve(__dirname, WORKER_FILE);
const START_INDEX = 10;

const createWorker = async (pathToWorkerFile, dataForWorker) => {
  return new Promise((res) => {
    const worker = new Worker(pathToWorkerFile, { workerData: dataForWorker });

    worker.on('message', (result) => {
      res(result);
    });

    worker.on('error', () => {
      res(null);
    });
  });
};

const performCalculations = async () => {
  const coresCount = os.availableParallelism();
  const workers = [];

  for (let idx = START_INDEX; idx < coresCount + START_INDEX; idx += 1) {
    const worker = createWorker(WORKER_PATH, idx);
    workers.push(worker);
  }

  const results = (await Promise.all(workers)).map((result) =>
    result !== null
      ? { status: 'resolved', data: result }
      : { status: 'error', data: result }
  );

  console.log(results);
};

await performCalculations();
