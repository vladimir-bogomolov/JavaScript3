function pagination(data) {
    let pagedData = [];
    for (let i = 0; i < Math.ceil(data.length/5); i++) {
        pagedData[i] = data.slice((i*5), (i*5) + 5);
    }
    return pagedData;
}

function showPageCounter(num, htmlStructure) {
    let arrowDown = document.createElement('div');
    arrowDown.textContent = '<';
    htmlStructure.pageCounter.appendChild(arrowDown);
    for (let i = 1; i <= num; i++) {
        let page = document.createElement('div');
        page.textContent = i;
        htmlStructure.pageCounter.appendChild(page);
        if (i===1) page.classList.add('current'); 
    }
    let arrowUp = document.createElement('div');
    arrowUp.textContent = '>';
    htmlStructure.pageCounter.appendChild(arrowUp);
}

function showUsersPage(pageNum, data, htmlStructure) {
    htmlStructure.contribListContentDiv.innerHTML = '';
    data[pageNum-1].forEach(person => {
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
    document.querySelectorAll('.page-counter div').forEach(element => {
        if (element.textContent == pageNum) {
            element.className = 'current';
        } else {
            element.className = null;
        }
    });
}

export {pagination, showPageCounter, showUsersPage};