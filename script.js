const searchForm = document.getElementById('search-form');
const usernameInput = document.getElementById('username-input');
const resultDiv = document.getElementById('result');

searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = usernameInput.value.trim();
        if (!username) {
            result 
    } try {
        const userData = await fetchUser(username);
        displayUser(userData);
    } catch (error) {
            displayError(error.message);
    }
});

async function fetchUser(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
    resultDiv.innerHTML = '<p>Buscando usuário...</p>';

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Usuário não encontrado. Verifique o nome e tente novamente.');
    }

    const data = await response.json();
    return data;
}

function displayUser(user) {
    const userCardHTML = `
        <img src="${user.avatar_url}" alt="foto de ${user.login}" style ="width: 100px; border-radius: 50%;">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || 'Sem biografia disponível.'}</p>
        <p><strong>Repositórios públicos: </strong> ${user.public_repos}</p>

    `;

    resultDiv.innerHTML = userCardHTML; 
}

function displayError(message) {
    resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}