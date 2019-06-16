const mkdir = require("../../../library/");
const path = require("path");

const generateControllers = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "controllers")));
  });

module.exports = {
  generateControllers: generateControllers
};
