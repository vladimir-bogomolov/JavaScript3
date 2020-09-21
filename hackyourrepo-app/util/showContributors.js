import { showError } from '/util/showError.js';
import {pagination, showPageCounter, showUsersPage} from '/util/pagination.js';


export async function showContribList(data, htmlStructure) {
    htmlStructure.contribListContentDiv.innerHTML = '';
    let response, contribData;
    try {
        response = await fetch(data.contributors_url);
        if(!response.ok) {throw new Error('Connection Failed')};
        contribData = await response.json();
        contribData = pagination(contribData);
        let currentPage = 1;
        if (contribData.length > 1) {
            showPageCounter(contribData.length, htmlStructure);
            document.querySelectorAll('.page-counter div').forEach(elem => {
                elem.addEventListener('click', (event) => {
                    let targetElem = event.target.textContent;
                    if (targetElem === '<') {
                        if (currentPage > 1) {
                            currentPage--;
                            showUsersPage(currentPage, contribData, htmlStructure);
                        }
                    } else if (targetElem === '>') {
                        if (currentPage < contribData.length) {
                            currentPage++;
                            showUsersPage(currentPage, contribData, htmlStructure);
                        }
                    } else {
                        if (currentPage !== parseInt(targetElem)) {
                            currentPage = parseInt(targetElem);
                            showUsersPage(currentPage, contribData, htmlStructure);
                        }
                    }
                })
            });           
        }
        showUsersPage(currentPage, contribData, htmlStructure); 
    } catch {
        showError(htmlStructure);
    } 
}