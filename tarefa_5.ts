const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
];

function mergeArrays(array1, array2) {
    const result = {}

    for (var i = 0; i < array1.length; i++) {
        const item = array1[i];
        result[item.id] = item;
    }

    for (var i = 0; i < array2.length; i++) {
        const item = array2[i];
        if (result[item.id]) {
            result[item.id] = { ...result[item.id], ...item };
        } else {
            result[item.id] = item;
        }
    }
    return Object.values(result);
}

console.log(mergeArrays(array1, array2))