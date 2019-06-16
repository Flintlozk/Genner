const mkdir = require("../../../library/");
const path = require("path");

const generateErrors = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "errors")));
  });

module.exports = {
  generateErrors: generateErrors
};
