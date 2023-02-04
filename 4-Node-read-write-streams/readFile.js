/*To read files line by line, you need a .createInterface() method from the readline core module.
The .createInterface() returns an EventEmitter set up to emit 'line' events. */

const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  // sets up emit on myInterface "line"
  input: fs.createReadStream("./data/text.txt"),
});
let writer = fs.createWriteStream("text2.txt");
myInterface.on("line", (fileLine) => {
  console.log(`The line read: ${fileLine}`);
  writer.write(fileLine + "\n");
});
writer.end();
