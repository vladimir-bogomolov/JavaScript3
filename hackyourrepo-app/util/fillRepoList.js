export async function fillRepoList(htmlStructure) {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    let response = await fetch(url);
    let data;
    if(response.ok) {
        data = await response.json();
    } else {
        throw new Error('Connection Failed');
    }
    data.forEach(repo => {
                let option = document.createElement('option');
                option.innerText = repo.name;
                htmlStructure.repoInput.appendChild(option);
            });
    return data;
}