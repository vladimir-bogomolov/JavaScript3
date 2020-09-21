"use strict";
import { createHtmlStructure } from '/util/createHTML.js';
import { showRepoInfo } from '/util/showRepoInfo.js';
import { showContribList } from '/util/showContributors.js';
import { showError } from '/util/showError.js';
import { fillRepoList } from '/util/fillRepoList.js';


window.onload = async () => {
  let htmlStructure = createHtmlStructure();
  let data;
  try {
    data = await fillRepoList(htmlStructure);
  } catch {
    showError(htmlStructure);
  }
  let currentRepo = showRepoInfo(data, htmlStructure);
  try {
    await showContribList(currentRepo, htmlStructure);
  } catch {
    showError(htmlStructure);
  }
  htmlStructure.repoInput.addEventListener('change', showRepoInfo.bind(null, data, htmlStructure, showContribList));

}

