javascript: (function() {
    var debugOn = true;
    /* https://stackoverflow.com/q/11292786; https://stackoverflow.com/a/8206573; https://stackoverflow.com/a/11604414 */
    if (debugOn) {alert("Bookmarklet start executing.")};
    if (this.document.location.href != "https://web.archive.org/save/") {
        if (debugOn) {alert("User is not on WBM. Opening WBM and stoping executing.")};
        var targetWBM = location.href;
        localStorage.setItem('targetWBM', targetWBM);
        window.open('https://web.archive.org/save/');
        // this.document.location.href = "https://web.archive.org/save/";
        return false;
    } else if (document.readyState === "complete") { // Wait for the page to finish loading
        if (debugOn) {alert("User is on WBM.")};
        let targetWBM = localStorage.getItem('targetWBM');
        if (debugOn) {alert("targetWBM: " + targetWBM)};
        document.getElementById("web-save-url-input").value = targetUrl;
        document.getElementById("capture_outlinks").checked     = !document.getElementById("capture_outlinks").checked;
        document.getElementById("capture_all").checked          = !document.getElementById("capture_all").checked;
        document.getElementById("capture_screenshot").checked   = !document.getElementById("capture_screenshot").checked;
        document.getElementById("wm-save-mywebarchive").checked = !document.getElementById("wm-save-mywebarchive").checked;
        document.getElementById("email_result").checked         = !document.getElementById("email_result").checked;
    }
    alert("Bookmarklet stops executing.");
    return false;
})();
