import path from 'node:path';
import url from 'node:url';
import os from 'node:os';
import { Worker } from 'node:worker_threads'; 

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_NAME = 'worker.js';
const FILE_PATH = path.resolve(__dirname, FILE_NAME);

const START_FROM_NUMBER = 10;

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
}

const performCalculations = async () => {
    const coresCount = os.availableParallelism();
    const workers = [];

    for (let idx = 0; idx < coresCount; idx +=1) {
      const worker = createWorker(FILE_PATH, START_FROM_NUMBER + idx);  
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