const mkdir = require("../../../library/");
const path = require("path");

const generateRoutes = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "routes")));
  });

module.exports = {
  generateRoutes: generateRoutes
};
