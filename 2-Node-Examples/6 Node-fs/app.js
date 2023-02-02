const fs = require("fs");
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

const readingData = async () => {
  let data = await fs.readFile("./fileOne.txt", "utf-8", readDataCallback);
  console.log(data);

  let data2 = await fs.readFile("./anotherFile.txt", "utf-8", readDataCallback);
  console.log(data2);

  let data3 = await fs.readFile("./finalFile.txt", "utf-8", readDataCallback);
  console.log(data3);
};

readingData();
let secretWord = "cheeseburgerpizzabagels";
