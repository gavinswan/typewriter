let timer = 0;
const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50)
};

setTimeout(() => {
  process.stdout.write('\n');
}, timer);

