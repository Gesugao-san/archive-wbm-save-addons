javascript: (function() {
    var debugOn = true;
    if (debugOn) {alert("Bookmarklet start executing.")};
    var text = "Example text to appear on clipboard";
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error(err);
            });
        } else {
            var msg = "Error: Permissions API's \"clipboard-write\" permission is needed, but denied.";
            alert(msg);
            console.error(msg)};
        });
    });
    if (this.document.location.href != "https://web.archive.org/save/") {
        if (debugOn) {var msg = "User is not on WBM. Opening WBM and stoping executing."; alert(msg); console.log(msg)};
        var targetWBM = location.href;
        var newWindow = window.open('');
        /* newWindow.document.write('<html><head><title>New TAB</tit' + 'le>'); */
        /* newWindow.document.write('</he' + 'ad>'); */
        newWindow.document.write('<input type="hidden" id="myField" value="" /><body>');
        newWindow.document.location='https://web.archive.org/save/';
        newWindow.document.close();
        newWindow.focus();
        /* this.document.location.href = "https://web.archive.org/save/"; */
        return false;
    } else if (document.readyState === "complete") { /* Wait for the page to finish loading */
        if (debugOn) {alert("User is on WBM. Ticking boxes.")};
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
