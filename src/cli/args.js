// to check run command 
//  node src/cli/args.js --propName value --prop2Name value2
const SEPARATOR = ', ';

const parseArgs = () => {
  const args = process.argv;

  const entries = [];

  let idx = 2; // skip paths

  while (idx < args.length) {
    if (args[idx].startsWith('--')) {
      entries.push(`${args[idx].replace(/^--/, '')} is ${args[idx + 1]}`);
      idx += 2;
    } else {
      idx += 1;
    }
  }

  console.log(entries.join(SEPARATOR));
};

parseArgs();
