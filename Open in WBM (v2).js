javascript: {
	var targetUrl = location.href;
	var debugOn = true;
	/* https://stackoverflow.com/q/11292786; https://stackoverflow.com/a/8206573; https://stackoverflow.com/a/11604414 */
	if (debugOn) {prompt("Bookmarklet start executing.", "")};
	if (this.document.location.href != "https://web.archive.org/save/") {
		if (debugOn) {prompt("User is not on WBM.", "")};
	    window.open('https://web.archive.org/save/');
		// this.document.location.href = "https://web.archive.org/save/";
		document.getElementById("capture_outlinks").checked = true;
		document.getElementById("capture_all").checked = true;
		document.getElementById("capture_screenshot").checked = true;
		document.getElementById("wm-save-mywebarchive").checked = true;
		document.getElementById("email_result").checked = true;
	} else if (document.readyState === "complete") { // Wait for the page to finish loading
		if (debugOn) {prompt("User is on WBM.", "")};
	    document.getElementById("web-save-url-input").value = targetUrl;
        document.getElementById("capture_outlinks").checked     = !document.getElementById("capture_outlinks").checked;
        document.getElementById("capture_all").checked          = !document.getElementById("capture_all").checked;
        document.getElementById("capture_screenshot").checked   = !document.getElementById("capture_screenshot").checked;
        document.getElementById("wm-save-mywebarchive").checked = !document.getElementById("wm-save-mywebarchive").checked;
        document.getElementById("email_result").checked         = !document.getElementById("email_result").checked;
    }
	if (debugOn) {prompt("Bookmarklet stops executing.", "")};
	void(0)
}
// Inspiration by:
// https://caiorss.github.io/bookmarklet-maker/
// https://mrcoles.com/bookmarklet/
// License: MIT 2021 Gesugao-san
