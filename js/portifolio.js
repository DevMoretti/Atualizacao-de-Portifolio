document.addEventListener("DOMContentLoaded", () => {
    const reposContainer = document.getElementById('repos');
    const username = 'DevMoretti';

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.classList.add('repo');
                
                repoElement.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description ? repo.description : 'Sem descrição'}</p>
                    <a href="${repo.html_url}" target="_blank">Visitar Repositório</a>
                `;

                reposContainer.appendChild(repoElement);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar repositórios:', error); 
        });
});
