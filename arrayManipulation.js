function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('The length of strings and numbers arrays must match.');
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

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