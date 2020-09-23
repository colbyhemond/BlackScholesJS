const BlackScholes = require("../js/blackscholes.js");

// Set Up
let stock = 0.00
let strike = 0.00
let vola = 0.00
let interest = 0.00
let term = 0.00

let BSHolder = new BlackScholes(stock, strike, vola, interest, term)

test("Returns about-us for english ", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});