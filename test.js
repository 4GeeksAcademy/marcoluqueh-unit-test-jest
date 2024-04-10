test("One euro should be 1.07 dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yen", function () {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("156.5 yen should be 0.87 pound", function () {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(156.5)).toBe(0.87);
})