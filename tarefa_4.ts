const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];

function groupByCategory(items) {
    const result = {};

    for (var i = 0; i < items.length; i++) {
        const item = items[i];
        const category = item.category;

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(item);
    }
    return result;
}

console.log(groupByCategory(items));