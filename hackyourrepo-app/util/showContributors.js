export async function showContribList(data, htmlStructure) {
    htmlStructure.contribListContentDiv.innerHTML = '';
    let response = await fetch(data.contributors_url);
    if(!response.ok) {throw new Error('Connection Failed')};
    let contribData = await response.json();
    contribData.forEach(person => {
          let card = document.createElement('div');
          card.className = 'user-card';
          let avatar = document.createElement('img');
          avatar.src = person.avatar_url;
          card.appendChild(avatar);
          let name = document.createElement('a');
          name.innerHTML = `<a href="https://github.com/${person.login}" target=_blank>${person.login}</a>`;
          card.appendChild(name);
          let contributions = document.createElement('div');
          contributions.className = 'contrib-number';
          contributions.innerText = person.contributions;
          card.appendChild(contributions);
          htmlStructure.contribListContentDiv.appendChild(card);
        });
  }