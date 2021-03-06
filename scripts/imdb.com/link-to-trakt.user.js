// ==UserScript==
// @name         show link to trakt.tv
// @description  imdb.com (inspired by IMDB2Trakt from Arias)
// @version      2.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.imdb.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      Public Domain (Unlicense)
//
// @include      http://www.imdb.com/title/*
// @include      https://www.imdb.com/title/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/imdb.com/link-to-trakt.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/imdb.com/link-to-trakt.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

(function () {

    'use strict';

    var container = document.querySelector('.subtext'),
        separator = document.createElement('span'),
        node = document.createElement('a'),
        // uggly way of getting imdb-ID
        id = document.URL.substring(26, 35);

    // add separator char
    separator.innerHTML = '|';
    separator.classList.add('ghost');

    // href for searching with the imdb-ID
    node.href = 'http://trakt.tv/search/imdb?query=' + id;

    node.textContent = 'Search Trakt.tv';
    // node.setAttribute('target','_blank');

    container.appendChild(separator);
    container.appendChild(node);

})();
