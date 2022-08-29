// ==UserScript==
// @name         Dicoding Skipper
// @namespace    gvoze32/dicodingskipper
// @version      1.0
// @description  Skip Dicoding class module with auto next click loop.
// @author       gvoze32
// @grant        GM_addStyle
// @match        *://*.dicoding.com/academies/*/tutorials/*
// @run-at       document-end
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/gvoze32/DicodingSkipper/main/dicodingskipper.user.js
// @downloadURL  https://raw.githubusercontent.com/gvoze32/DicodingSkipper/main/dicodingskipper.user.js
// ==/UserScript==

document.querySelector('.js-btn-next-tutorial').click();
