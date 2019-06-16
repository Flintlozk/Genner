const fs = require("fs");

const readCurrentPath = () =>
  new Promise(async (resolve, reject) => {
    console.log("DO MAIN FUNCTION");
    console.log('process.cwd()->>',process.cwd());
    // const file = await fs.readFileSync(process.cwd());
    // console.log("file->>", file);
  });

module.exports = {
  read: readCurrentPath
};
