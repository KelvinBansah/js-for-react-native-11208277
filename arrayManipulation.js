// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Squares even numbers and triples odd numbers.
 * 
 * @param {number[]} arr - The array of numbers to be processed.
 * @returns {number[]} A new array with processed numbers.
 */
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}

/**
 * Function to format an array of strings based on corresponding numbers.
 * Capitalizes strings if the corresponding number is even,
 * converts to lowercase if the corresponding number is odd.
 * 
 * @param {string[]} strings - The array of strings to be formatted.
 * @param {number[]} numbers - The array of numbers used for formatting.
 * @returns {string[]} A new array with formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('The length of strings and numbers arrays must match.');
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            // Capitalize the string
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase
            return str.toLowerCase();
        }
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log('Processed Numbers:', processedNumbers);

const strings = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formattedStrings);

module.exports = {
    processArray,
    formatArrayStrings
};