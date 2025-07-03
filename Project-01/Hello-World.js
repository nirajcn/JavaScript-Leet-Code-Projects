/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function (...args) {
        return "Hello World"       /*<--------------I Added Here */

    }
};

const f = createHelloWorld();
console.log(f("Check","New")); // "Hello World"



/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// +++++++++++++++++++++++++++++++ Real Life Analogy ++++++++++++++++++++++



function ChaiMachin() {
    return function (...gredients) {
        return "Chai Ready ☕️";
    }
}

const chai = ChaiMachin();

console.log(chai("Milk", "Sugar", "Water", "tea leaves"));
console.log(chai("lemon", "chocolate"));

