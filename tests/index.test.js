const BlackScholes = require("../js/v2/blackscholes.js");

// Set Up
let stock = 0.00
let strike = 0.00
let interest = 0.00
let vola = 0.00
let term = 0.00

let BS = new BlackScholes(stock, strike,  interest, vola, term)

test("0 holder values returns 0 put", () => {
    expect(BS.getPut()).toBe(0.00);
});