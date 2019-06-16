const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateSchema = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "schemas")));
  });

module.exports = {
  generateSchema: generateSchema
};
