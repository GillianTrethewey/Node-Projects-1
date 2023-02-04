const createdUrl = new URL("https://www.example.com");
createdUrl.pathname = "/p/a/t/h";
createdUrl.search = "?query=string";
createUrl.toString();
// Creates https://www.example.com/p/a/t/h?query=string

const url = require("url");

const URL_TO_PARSE =
  "https://www.example.com/p/a/t/h?prop1=value1&prop2=value2";

const myUrl = new URL(URL_TO_PARSE);

const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams;
