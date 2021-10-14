javascript: (function() {
    var debugOn = true;
    if (debugOn) {console.log("Bookmarklet start executing.")};

    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            if (debugOn) console.info("OK: API's \"clipboard-write\" permission is granted.");
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

    if (this.document.location.href != "https://web.archive.org/save/") {
        console.log("User is not on WBM. Copying to current URL to clipboard, opening WBM and stoping executing.");

        var targetWBM = location.href;
        var targetWBM_HTML = document.createElement("textarea");
        targetWBM_HTML.textContent = targetWBM;
        document.body.appendChild(targetWBM_HTML);
        targetWBM_HTML.select();
        document.execCommand('copy');
        targetWBM_HTML.blur();
        document.body.removeChild(targetWBM_HTML);

        window.open('https://web.archive.org/save/');
        /* window.document.location='https://web.archive.org/save/'; */
        /* window.document.close(); */
        /* window.focus(); */
        /* this.document.location.href = "https://web.archive.org/save/"; */
        return false;
    } else if (document.readyState === "complete") { /* Wait for the page to finish loading */
        console.log("User is on WBM. Ticking boxes.");
        document.getElementById("web-save-url-input").value = targetUrl;
        document.getElementById("capture_outlinks").checked     = !document.getElementById("capture_outlinks").checked;
        document.getElementById("capture_all").checked          = !document.getElementById("capture_all").checked;
        document.getElementById("capture_screenshot").checked   = !document.getElementById("capture_screenshot").checked;
        document.getElementById("wm-save-mywebarchive").checked = !document.getElementById("wm-save-mywebarchive").checked;
        document.getElementById("email_result").checked         = !document.getElementById("email_result").checked;
    }
    console.log("Bookmarklet stops executing.");
    return false;
})();
