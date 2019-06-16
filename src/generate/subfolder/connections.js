const mkdir = require("../../../library/");
const path = require("path");

const generateConnection = () =>
  new Promise(async (resolve, reject) => {
    console.log("generateConnection");
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "connections")));
  });

module.exports = {
  generateConnection: generateConnection
};
