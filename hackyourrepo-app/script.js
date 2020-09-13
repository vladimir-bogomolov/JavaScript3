"use strict";

window.onload = () => {
  // Creating HTML structure
  let containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  document.body.appendChild(containerDiv);
  let footerSection = document.createElement('section');
  footerSection.className = 'footer';
  document.body.appendChild(footerSection);
  footerSection.innerHTML = `<h4>HYF Repositories</h4>`;

  let header = document.createElement('header');
  let headerH3 = document.createElement('h3');
  headerH3.textContent = 'HYF Repositories';
  header.appendChild(headerH3);
  let repoInput = document.createElement('select');
  header.appendChild(repoInput);
  containerDiv.appendChild(header);

  let repInfoSection = document.createElement('section');
  repInfoSection.className = 'rep-info';
  let repInfoTable = document.createElement('table');
  repInfoSection.appendChild(repInfoTable);
  containerDiv.appendChild(repInfoSection);

  let contribListSection = document.createElement('section');
  contribListSection.className = 'contrib-list';
  let contribListHeaderDiv = document.createElement('div');
  contribListHeaderDiv.className = 'contrib-list-header';
  contribListHeaderDiv.innerHTML = `<p>Contributors</p>`;
  contribListSection.appendChild(contribListHeaderDiv);
  let contribListContentDiv = document.createElement('div');
  contribListContentDiv.className = 'contrib-list-content';
  contribListSection.appendChild(contribListContentDiv);
  containerDiv.appendChild(contribListSection);

  // Function to show repo info
  function showRepoInfo(data) {
    function createRow(firstCol, secondCol) {
      let row = document.createElement('tr');
      let firstTd = document.createElement('td');
      firstTd.innerText = firstCol +':';
      let secondTd = document.createElement('td');
      secondTd.innerHTML = secondCol;
      row.appendChild(firstTd);
      row.appendChild(secondTd);
      return row;
    }

    let currentRepoIndex = repoInput.selectedIndex;
    repInfoTable.innerHTML = '';
    repInfoTable.appendChild(createRow('Repository', `<a href="https://github.com/HackYourFuture/${data[currentRepoIndex].name}" target="_blank">${data[currentRepoIndex].name}</a>`));
    repInfoTable.appendChild(createRow('Description', data[currentRepoIndex].description));
    repInfoTable.appendChild(createRow('Forks', data[currentRepoIndex].forks));
    repInfoTable.appendChild(createRow('Updated', data[currentRepoIndex].updated_at.replace(/[A-Z]/g, ' ')));
    showContribList(data[currentRepoIndex]);
  }

  // Function to show list of contributors

  function showContribList(data) {
    contribListContentDiv.innerHTML = '';
    fetch(data.contributors_url)
      .then(response => {return response.json()})
      .then(contribData => {
        contribData.forEach(person => {
          let card = document.createElement('div');
          card.className = 'user-card';
          let avatar = document.createElement('img');
          avatar.src = person.avatar_url;
          card.appendChild(avatar);
          let name = document.createElement('a');
          name.innerHTML = `<a href="https://github.com/${person.login}">${person.login}</a>`;
          card.appendChild(name);
          let contributions = document.createElement('div');
          contributions.className = 'contrib-number';
          contributions.innerText = person.contributions;
          card.appendChild(contributions);
          contribListContentDiv.appendChild(card);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Filling repo-list
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then(response => {return response.json()})
    .then(data => {
      data.forEach(repo => {
        let option = document.createElement('option');
        option.innerText = repo.name;
        repoInput.appendChild(option);
      });
      showRepoInfo(data);
      repoInput.addEventListener('change', showRepoInfo.bind(null, data));
    })
    .catch(error => {
      console.log(error);
    });
}

// Add if status===ok
// Add error handlers