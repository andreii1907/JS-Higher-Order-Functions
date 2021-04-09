// ------- Exercise with array ------- //

function evenNumbers(array) {
    return array.every((el) => el % 2 === 0);
}

console.log(evenNumbers(
    [2, 5, 8, 9, 11, 74, 99]
));

// ------ Exercise with forEach ------- // 

function consoleAllElements(elements) {
    return elements.forEach((el) => console.log(el));
}

// -- aici da acelasi rezultat si cu map -- //
consoleAllElements([20, 19, 27, 'buna ziua', 64, undefined, true]);


// ------- Exercise with Reduce ------- //

function sumNumbers(numbers) {
    return numbers.reduce((total, num) =>  total + Math.round(num));
}

console.log(sumNumbers([15, 26, 29, 44, 59]));


// ------- Extra exercise with Reduce ------- //

function sumArray(el) {

    function roundAbout(total, num) {
        return total + Math.round(num)
    }

    return el.reduce(roundAbout, 0);
}

console.log(sumArray([29.4, 44.6, 29.8, 16, 49.1, 13]));