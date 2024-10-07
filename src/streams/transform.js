import { Transform } from 'node:stream';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const chars = chunk.toString().split('');
    const eol = chars.pop();
    const reversedChars = chars.reverse();
    reversedChars.push(eol);
    
    this.push(reversedChars.join(''));

    callback();
  },
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout) 
};

await transform();