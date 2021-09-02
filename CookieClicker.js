// ==UserScript==
// @name         Cookie Auto-clicker
// @namespace    https://github.com/Bigfoot9999
// @version      1.1.0
// @description  Auto clicker made by bigfoot (https://raw.githubusercontent.com/Bigfoot9999/Auto-Cookie-Clicker/main/CookieClicker.js)
// @author       Bigfoot9999
// @match        https://*/*
// @grant        none
// @icon         https://d29fhpw069ctt2.cloudfront.net/icon/image/85131/preview.svg
// @updateURL    https://raw.githubusercontent.com/Bigfoot9999/Auto-Cookie-Clicker/main/CookieClicker.js
// @downloadURL  https://raw.githubusercontent.com/Bigfoot9999/Auto-Cookie-Clicker/main/CookieClicker.js
// ==/UserScript==

document.addEventListener("keypress", function(keypress) {
    alert("Update Chrome OS keyboard for typing functionality");
});
(function cookieClick(){
    document.getElementById('bigCookie').click();
    setTimeout(cookieClick, 0);
})();


