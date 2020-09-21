import { showError } from '/util/showError.js';
export async function fillRepoList(htmlStructure) {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    let response, data;
    try {
        response = await fetch(url);
        if(!response.ok) {throw new Error('Connection Failed');}
        data = await response.json();
        data.forEach(repo => {
            let option = document.createElement('option');
            option.innerText = repo.name;
            htmlStructure.repoInput.appendChild(option);
        });
        return data;
    } catch {
        showError(htmlStructure);
    } 
}