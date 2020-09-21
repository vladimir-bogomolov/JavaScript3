export function showRepoInfo(data, htmlStructure, showContribList) {
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

    htmlStructure.errorDiv.style.display = 'none';
    htmlStructure.repInfoSection.style.display = 'block';
    htmlStructure.contribListSection.style.display = 'block';
    let currentRepoIndex = htmlStructure.repoInput.selectedIndex;
    htmlStructure.repInfoTable.innerHTML = '';
    htmlStructure.repInfoTable.appendChild(createRow('Repository', `<a href="https://github.com/HackYourFuture/${data[currentRepoIndex].name}" target="_blank">${data[currentRepoIndex].name}</a>`));
    htmlStructure.repInfoTable.appendChild(createRow('Description', data[currentRepoIndex].description));
    htmlStructure.repInfoTable.appendChild(createRow('Forks', data[currentRepoIndex].forks));
    htmlStructure.repInfoTable.appendChild(createRow('Updated', data[currentRepoIndex].updated_at.replace(/[A-Z]/g, ' ')));
    htmlStructure.pageCounter.innerHTML = '';
    if(showContribList) showContribList(data[currentRepoIndex], htmlStructure);
    return data[currentRepoIndex];
}