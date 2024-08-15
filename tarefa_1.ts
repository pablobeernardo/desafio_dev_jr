
const users = [
    { id: 1, name: 'Julia', age: 10, isActive: true },
    { id: 2, name: 'Pablo', age: 31, isActive: true },
    { id: 3, name: 'Camilla', age: 30, isActive: false },
    { id: 4, name: 'Arthur', age: 2, isActive: true },
    { id: 5, name: 'Andrea', age: 51, isActive: true },
];

function transformData(users) {
    return users
        .filter(user => user.isActive)
        .map(user => ({ id: user.id, name: user.name }))
        .sort((a, b) => a.name.localeCompare(b.name))
};

console.log(transformData(users));