// ==UserScript==
// @name         Open in WBM (v5)
// @namespace    https://gist.github.com/Gesugao-san/5d6b5d791dc941d80b5837e83e57b963
// @version      0.1
// @description  try to take over the world!
// @author       Gesugao-san
// @match        https://stackoverflow.com/questions/28833403/jquery-ajax-sending-post-with-values-from-inputs-with-tampermonkey
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.registerMenuCommand
// @run-at       context-menu
// ==/UserScript==

(async function() {
    'use strict';

    console.log("GM.listValues:", await GM.listValues);
    GM.setValue("foo", "bar");
    console.log("GM.listValues:", await GM.listValues);
    console.log(await GM.getValue("foo"));
    GM.deleteValue("foo");

    function test() {
        GM.openInTab("https://website.net");
    }

    GM.registerMenuCommand("hello", test, "h");
})();
