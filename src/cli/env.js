const parseEnv = () => {
  const RSS_PREFIX = 'RSS_';
  const SEPARATOR = '; ';
  const rssEntries = [];

  for (const [name, value] of Object.entries(process.env)) {
    if (name.startsWith(RSS_PREFIX)) {
      rssEntries.push(`${name}=${value}`);
    }
  }

  console.log(rssEntries.join(SEPARATOR));
};

parseEnv();
