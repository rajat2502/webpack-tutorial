// var multiply = require("./multiply");
// var sum = require("./sum");

import multiply from "./multiply";
import sum from "./sum";

import "./math_output.css";

const totalMultiply = multiply(5, 3);
const totalSum = sum(5, 3);

// create the body
const body = document.createElement("body");
document.documentElement.appendChild(body);

// calculate the product and add it to a span
const multiplyResultsSpan = document.createElement("span");
multiplyResultsSpan.appendChild(
  document.createTextNode(`Product of 5 and 3 is ${totalMultiply}`)
);

// calculate the sum and add it to a span
const sumResultSpan = document.createElement("span");
sumResultSpan.appendChild(
  document.createTextNode(`Sum of 5 and 3 is ${totalSum}`)
);

// add the results to the page
document.body.appendChild(sumResultSpan);
document.body.appendChild(multiplyResultsSpan);
