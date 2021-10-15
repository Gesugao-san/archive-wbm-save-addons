javascript: (function() {
    var debugOn = false;
    if (debugOn) console.log("[\"WayBack Mashine\" (WBM) bookmarklet]\nStatus: script starts executing.");
    const URLsFilter = ["www.", "http://", "https://"];
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (!WBMsites.includes(this.document.location.href)) {
        console.log("[WBM bookmarklet]\nUser is not on WBM. Target acquired.\nActions:\n1. Copying to current URL to clipboard.\n2. Opening WBM.\nTo second step, click on me on WBM page!");
        var targetWBM_HTML = document.createElement("textarea");
        targetWBM_HTML.textContent = location.href;
        document.body.appendChild(targetWBM_HTML);
        targetWBM_HTML.select();
        document.execCommand('copy');
        targetWBM_HTML.blur();
        document.body.removeChild(targetWBM_HTML);
        if (debugOn) console.log("[WBM bookmarklet]\nStatus: script stops executing.\nReason: changing pages.");
        window.open('https://web.archive.org/save/');
        /* window.document.location='https://web.archive.org/save/'; */
        /* window.document.close(); */
        /* window.focus(); */
        /* this.document.location.href = "https://web.archive.org/save/"; */
        return false;
    } else if (document.readyState === "complete") { /* Wait for the page to finish loading */
        console.log("[WBM bookmarklet]\nUser is on WBM. Ticking boxes.");
        var urlInput = document.getElementById("web-save-url-input")
        urlInput.focus();
        urlInput.select();
        if (document.execCommand('paste')) urlInput.val();
        if (navigator.clipboard) {
            navigator.permissions.query({name: "clipboard-write"}).then(result => {
                /* if (result.state == "granted" || result.state == "prompt") { */
                if (["granted", "prompt"].includes(result.state))  {
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
            navigator.clipboard.readText()
            .then(text => {
                /* `text` contains the text read from the clipboard */
                /* if (debugOn) console.warn("[WBM bookmarklet]\nClipboard content: ", text); */
                if ((text.slice(0, URLsFilter[0].length) == URLsFilter[0]) || (text.slice(0, URLsFilter[1].length) == URLsFilter[1]) || (text.slice(0, URLsFilter[2].length) == URLsFilter[2])) {
                    console.log("[WBM bookmarklet]\nClipboard content is valid URl.");
                    document.getElementById('web-save-url-input').value = text;
                } else {
                    console.error("[WBM bookmarklet]\nClipboard content is not valid URl.");
                }
            })
            .catch(err => {
                /* maybe user didn't grant access to read from clipboard */
                console.error('[WBM bookmarklet]\nSomething went wrong.\n', err);
                return false;
            });
        } else {
            /* nope 😢. Use execCommand or leave the feature off */
            console.error("[WBM bookmarklet]\nFatal error: navigator.clipboard is not avaliable, exiting.");
            return false;
        };
        var targetBoolean = document.getElementById("capture_outlinks").checked
        document.getElementById("capture_outlinks").checked     = !targetBoolean; /* Save outlinks */
        document.getElementById("capture_all").checked          = !targetBoolean; /* Save error pages */
        document.getElementById("capture_screenshot").checked   = !targetBoolean; /* Save screen shot */
        document.getElementById("wm-save-mywebarchive").checked = !targetBoolean; /* Save also in my web archive */
        document.getElementById("email_result").checked         = !targetBoolean; /* Please email me the results */
        //var saveButton = document.getElementsByClassName("web-save-button").click(); /* "web-save-button web_button web_text" */
        //saveButton.onclick(function() {/*Do something*/});
        setTimeout(function() {document.forms["web-save-form"].submit();}, 1500);
        console.info("[WBM bookmarklet]\Form was submitted!");
    } else {
        console.warn("[WBM bookmarklet]\nUser is on WBM, but is seems that page is not loaded yet. Wait and try again later. Exiting.");
    }
    if (debugOn) console.log("[WBM bookmarklet]\nStatus: script stops executing.\nReason: EOF.");
    return false;
})();
