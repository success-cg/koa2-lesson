const fs = require('fs');
const util = require('util');

/*async function*/
const readFile = util.promisify(fs.readFile);

async function readFileAsync(path) {
  try {
    let file = await readFile(path);
    console.log(JSON.parse(file));
  } catch (err) {
    console.log(err);
  }
}

readFileAsync('../package.json');

