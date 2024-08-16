
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

function countOccurrences(fruits) {
    const result = {};

    for (var i = 0; i < fruits.length; i++) {
        const item = fruits[i];

        if (result[item]) {
            result[item]++;
        }
        else {
            result[item] = 1;
        }
    }
    return result;
}

console.log(countOccurrences(fruits));