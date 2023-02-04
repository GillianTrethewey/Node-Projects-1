const url = new URL("https://www.example.com/p/a/t/h?query=string");
// one can break the URL down into easily usable parts for processing the request
const host = url.hostname;
// example.com
const pathname = url.pathname;
// /p/a/t/h
const searchParams = url.searchParams;
// {query: 'string'}
