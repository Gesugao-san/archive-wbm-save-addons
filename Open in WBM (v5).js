// ==UserScript==
// @name         Open in WBM (v5)
// @namespace    https://gist.github.com/Gesugao-san/5d6b5d791dc941d80b5837e83e57b963
// @version      0.1
// @description  try to take over the world!
// @author       Gesugao-san
// @match        *//*/*
// @include      *
// @exclude      file://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.registerMenuCommand
// @grant        GM.unregisterMenuCommand
// ==/UserScript==
// @run-at       document-start

(function() {
    //'use strict';

    /*
    console.log("GM.listValues:", await GM.listValues);
    GM.setValue("foo", "bar");
    console.log("GM.listValues:", await GM.listValues);
    console.log(await GM.getValue("foo"));
    GM.deleteValue("foo");
    */
    GM.registerMenuCommand("hello", test, "h");

    function test() {
        GM.openInTab("https://website.net");
        //GM.unregisterMenuCommand("hello");
    }
}
)();
