javascript: (function() {
    var debugOn = true;
    if (debugOn) {alert("Bookmarklet start executing.")};

    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            console.log("OK: API's \"clipboard-write\" permission is granted.");
            /*
            navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error(err);
            });
            */
        } else {
            var msg = "Fatal error: API's \"clipboard-write\" permission is needed, but denied.";
            alert(msg);
            console.error(msg);
            return false;
        };
    });

    var text = "Example text to appear on clipboard";
    var copyFrom = document.createElement("textarea");
    console.log('Copying to clipboard.');
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
    
    if (this.document.location.href != "https://web.archive.org/save/") {
        if (debugOn) {var msg = "User is not on WBM. Opening WBM and stoping executing."; alert(msg); console.log(msg)};
        var targetWBM = location.href;
        window.open('https://web.archive.org/save/');
        /* window.document.location='https://web.archive.org/save/'; */
        /* window.document.close(); */
        /* window.focus(); */
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
