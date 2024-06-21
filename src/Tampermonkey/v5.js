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
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';

	let checkBoxesIDS = ["capture_outlinks", "capture_all", "capture_screenshot", "wm-save-mywebarchive", "email_result"];
	const URLsFilter = ["www.", "http://", "https://"];
	const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];

	/*
	console.log("GM.listValues:", await GM.listValues);
	GM.setValue("foo", "bar");
	console.log("GM.listValues:", await GM.listValues);
	console.log(await GM.getValue("foo"));
	GM.deleteValue("foo");
	*/
	GM.registerMenuCommand("Save this page in WBM", save1, "save1");

	function save1() {
		var userLocation = document.location.origin;
		if (!WBMsites.includes(userLocation)) {
			GM.setValue("url_to_save_in_wbm", window.location.href);
			GM.openInTab("https://web.archive.org/save");
		}
		var url_to_save_in_wbm = GM.getValue("url_to_save_in_wbm");
		if (url_to_save_in_wbm === null) {
			alert("Error: No var saved!");
			return 1;
		}
		for (let checkBoxID of checkBoxesIDS) {
			var element = document.getElementById(checkBoxID);
			element.checked = true;
		}
		GM.deleteValue("url_to_save_in_wbm");
	}
}
)();
