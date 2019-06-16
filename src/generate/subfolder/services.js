const mkdir = require("../../../library/");
const path = require("path");

const generateServices = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "services")));
    });

module.exports = {
  generateServices: generateServices
};
