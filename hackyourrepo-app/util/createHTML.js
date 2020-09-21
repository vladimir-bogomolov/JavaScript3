
export function createHtmlStructure() {
    function createHtml(type, parent, nameOfClass, HtmlContent) {
        let element = document.createElement(type);
        if (nameOfClass) element.className = nameOfClass;
        if (HtmlContent) element.innerHTML = HtmlContent;
        parent.appendChild(element);
        return element;
    }
  let containerDiv = createHtml('div', document.body, 'container');
  let footerSection = createHtml('section', document.body, 'footer', `<h4>HYF Repositories</h4>`);
  let header = createHtml('header', containerDiv);
  let headerH3 = createHtml('h3', header);
  headerH3.textContent = 'HYF Repositories';
  let repoInput = createHtml('select', header);
  let errorDiv = createHtml('div', containerDiv, 'error', '<h4>Network request failed</h4>');
  let repInfoSection = createHtml('section', containerDiv, 'rep-info');
  let repInfoTable = createHtml('table', repInfoSection);
  let contribListSection = createHtml('section', containerDiv, 'contrib-list');
  let contribListHeaderDiv = createHtml('div', contribListSection, 'contrib-list-header', `<p>Contributors</p>`);
  let contribListContentDiv = createHtml('div', contribListSection, 'contrib-list-content');
  return {containerDiv, footerSection, header, headerH3, repoInput, errorDiv, repInfoSection, repInfoTable, contribListSection, contribListHeaderDiv, contribListContentDiv};
}