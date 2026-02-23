const _ = require("lodash");
const arr = [1, 2, 3, 4, 5];
const chunkedArr = _.chunk(arr, 3);
console.log(chunkedArr);

const obj = { a: 1, b: 2, c: { d: 3, e: 4 } };
console.log(obj);

const chalk = require("chalk");
console.log(chalk.blue("Hello world"));
console.log(chalk.red.bold("this is an error message"));

// const axios = require("axios");
// const { response } = require("express");
// const url = "https://jsonplaceholder.typicode.com/posts";
// axios
//   .getUri(url)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

const dayjs = require('dayjs');
console.log(dayjs().format('YYYY-MM-DD HH:mm:SS'));
  