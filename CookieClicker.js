// ==UserScript==
// @name         Cookie Auto-clicker
// @namespace    https://github.com/Bigfoot9999
// @version      1.1.0
// @description  Auto clicker made by bigfoot
// @author       Bigfoot9999
// @match        https://trixter9994.github.io/Cookie-Clicker-Source-Code/
// @grant        none
// @updateURL    https://github.com/Bigfoot9999/Auto-Cookie-Clicker/
// @downloadURL  https://github.com/Bigfoot9999/Auto-Cookie-Clicker/
// ==/UserScript==
//DOWNLOAD TAMPERMONKEY: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

(function cookieClick(){
    document.getElementById('bigCookie').click();
    setTimeout(cookieClick, 0);
})();







document.addEventListener("keypress", function(keypress) {
        alert("Update Chrome OS keyboard for typing functionality");
});
