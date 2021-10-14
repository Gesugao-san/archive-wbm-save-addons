javascript: (function() {
    var debugOn = true;
    if (debugOn) {alert("Bookmarklet start executing.")};
    if (this.document.location.href != "https://web.archive.org/save/") {
        if (debugOn) {alert("User is not on WBM. Opening WBM and stoping executing.")};
        var targetWBM = location.href;
        var newWindow = window.open('https://web.archive.org/save/');
        newWindow.document.write('<html><head><title>New TAB</tit' + 'le>');
        newWindow.document.write('</he' + 'ad>')
        newWindow.document.write('<input type="hidden" id="myField" value="" /><body>')
        newWindow.document.close();
        newWindow.focus();
        // this.document.location.href = "https://web.archive.org/save/";
        return false;
    } else if (document.readyState === "complete") { // Wait for the page to finish loading
        if (debugOn) {alert("User is on WBM.")};
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
