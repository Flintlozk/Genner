const mkdir = require("../../../library/");
const path = require("path");

const generateSchema = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "schemas")));
  });

module.exports = {
  generateSchema: generateSchema
};
