async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const usersFilter = data.filter(user => user.username.startsWith("C"));
        return usersFilter;
    }
    catch (error) {
        console.error("Erro ao buscar usuario:", error);
    }
}

fetchUserData().then(users => {
    console.log(users);
});

