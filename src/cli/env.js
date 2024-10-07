// to check use command 
// node --env-file=.env src/cli/env.js

const RSS_PREFIX = 'RSS_';
const SEPARATOR = '; ';

const parseEnv = () => {
  const rssEntries = [];

  for (const [name, value] of Object.entries(process.env)) {

    if (name.startsWith(RSS_PREFIX)) {
      rssEntries.push(`${name}=${value}`);
    }
  }

  console.log(rssEntries.join(SEPARATOR));
};

parseEnv();
