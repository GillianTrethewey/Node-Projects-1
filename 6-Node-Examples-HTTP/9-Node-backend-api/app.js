/* There are a few methods provided by the `http` module that facilitate 
making HTTP requests to external services. One of these methods is the 
`request()` method. The `request()` method takes two arguments; 
it takes a configuration object containing details about the 
request as well as a callback to handle the response.*/

const options = {
  hostname: "example.com",
  port: 8080,
  path: "/projects",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const request = http.request(options, (res) => {
  // Handle response here
});
