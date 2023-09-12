const config = require("config");
const mongoose = require("mongoose");
const chalk = require("chalk");

//*aesthetics of console ()
console.log("");

console.log(
  `connection DB MongoDB => ${
    config.get("dbConfig.url") &&
    config.get("dbConfig.url").startsWith("mongodb+srv://")
      ? chalk.hex("#fff700").underline.bold("ATLAS Enviroment")
      : chalk.green.underline.bold("LOCAL Enviroment")
  }`
);

const connectToDB = () => {
  //the loop below is just for the project checker, that replacing the procedure of production.json file wont be missed
  if (config.get("dbConfig.url") === "PLEASE-REPLACE-THE-FILE") {
    for (let i = 0; i < 10; i++) {
      console.log(
        `${chalk
          .bgHex(i * 123)
          .hex(i * 763)
          .bold(
            "OH! It looks like there is the wrong 'production.json' file!"
          )}\n${chalk
          .bgHex(i * 123)
          .hex(`${(i * 763).toString(16)}`)
          .bold(
            "I fear you must replace the production file with the one \nattached to the student's assignment"
          )} ${chalk.bgBlue.red.bold(":)")}`
      );
    }
  }
  return mongoose.connect(config.get("dbConfig.url"));
};

module.exports = connectToDB;
