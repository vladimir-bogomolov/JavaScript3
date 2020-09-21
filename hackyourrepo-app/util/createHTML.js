export function createHtmlStructure() {
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

  let errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.innerHTML = '<h4>Network request failed</h4>';
  errorDiv.style.display = 'none';
  containerDiv.appendChild(errorDiv);

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
  return {containerDiv, footerSection, header, headerH3, repoInput, errorDiv, repInfoSection, repInfoTable, contribListSection, contribListHeaderDiv, contribListContentDiv};
}