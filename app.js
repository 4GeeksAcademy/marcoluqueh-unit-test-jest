// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}
// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    // return the yen value
    return valueInYen;
}
// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
    // return the pound value
    return valueInPound;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}