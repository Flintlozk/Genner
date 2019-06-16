const mkdir = require("../../library/");
const path = require("path");
const { generateAllAtOnce } = require("./subfolder");

const generateProjectFromCurrentPath = () =>
  new Promise(async (resolve) => {
    //   generateAllAtOnce()
    await mkdir(process.env.gnnProjectName);
    process.env.gnnSubFolder = path.join(
      process.cwd(),
      process.env.gnnProjectName
    );
    await generateAllAtOnce();
    resolve();
  });
module.exports = {
  generate: generateProjectFromCurrentPath
};
