const fs = require("fs");

const makeDirectory = pathName =>
  new Promise(async (resolve, reject) => {
    fs.mkdir(pathName, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

module.exports = makeDirectory;
