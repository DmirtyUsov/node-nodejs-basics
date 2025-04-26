const parseArgs = () => {
  const SEPARATOR = ', ';
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
