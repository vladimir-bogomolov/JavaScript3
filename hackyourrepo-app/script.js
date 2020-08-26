"use strict";

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const contribPlaceholder = [{
  name: 'vladimir-bogomolov',
  avatar: 'https://avatars2.githubusercontent.com/u/67100332?s=400&u=addba4462934ca7e1a628ecb7e67cd23ebc0418b&v=4',
  contributions: 10
}, {
  name: 'NoerGitKat',
  avatar: 'https://avatars1.githubusercontent.com/u/13186712?s=460&u=37b2314606d88617b57f5068bbc5d942805c30d8&v=4',
  contributions: 100
}];

const repoInput = document.querySelector('select');
placeholderRepos.forEach(repo => {
  let option = document.createElement('option');
  option.innerText = repo.name;
  repoInput.appendChild(option);
})

function showRepoInfo() {
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
  const table = document.querySelector('.rep-info table');
  table.innerHTML = '';
  table.appendChild(createRow('Repository', `<a href="https://github.com/HackYourFuture/${placeholderRepos[currentRepoIndex].name}" target="_blank">${placeholderRepos[currentRepoIndex].name}</a>`));
  table.appendChild(createRow('Description', placeholderRepos[currentRepoIndex].description));
  table.appendChild(createRow('Forks', placeholderRepos[currentRepoIndex].forks));
  table.appendChild(createRow('Updated', placeholderRepos[currentRepoIndex].updated));
  showContribList();
}

function showContribList() {
 const cardList = document.querySelector('.contrib-list-content');
 cardList.innerHTML = '';
 contribPlaceholder.forEach(person => {
   let card = document.createElement('div');
   card.className = 'user-card';
   let avatar = document.createElement('img');
   avatar.src = person.avatar;
   card.appendChild(avatar);
   let name = document.createElement('a');
   name.innerHTML = `<a href="https://github.com/${person.name}">${person.name}</a>`;
   card.appendChild(name);
   let contributions = document.createElement('div');
   contributions.className = 'contrib-number';
   contributions.innerText = person.contributions;
   card.appendChild(contributions);
   cardList.appendChild(card);
 })
}
showRepoInfo();
showContribList();
repoInput.addEventListener('change', showRepoInfo);