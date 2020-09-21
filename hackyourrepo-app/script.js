"use strict";
import { createHtmlStructure } from '/util/createHTML.js';
import { showRepoInfo } from '/util/showRepoInfo.js';
import { showContribList } from '/util/showContributors.js';
import { fillRepoList } from '/util/fillRepoList.js';


window.onload = async () => {
  let htmlStructure = createHtmlStructure();
  let data = await fillRepoList(htmlStructure);
  let currentRepo = showRepoInfo(data, htmlStructure);
  await showContribList(currentRepo, htmlStructure);
  htmlStructure.repoInput.addEventListener('change', showRepoInfo.bind(null, data, htmlStructure, showContribList));
}

