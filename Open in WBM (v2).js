javascript: (function() {
    var debugOn = true;
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (debugOn) console.log("Bookmarklet for \"WayBack Mashine\" (WBM is short) start executing.");

    if (!WBMsites.includes(this.document.location.href)) {
        console.log("User is not on WBM. Copying to current URL to clipboard and opening WBM.");
        var targetWBM = location.href;
        var targetWBM_HTML = document.createElement("textarea");
        targetWBM_HTML.textContent = targetWBM;
        document.body.appendChild(targetWBM_HTML);
        targetWBM_HTML.select();
        document.execCommand('copy');
        targetWBM_HTML.blur();
        document.body.removeChild(targetWBM_HTML);

        console.log("Bookmarklet stops executing (due to changing pages).");
        window.open('https://web.archive.org/save/');
        /* window.document.location='https://web.archive.org/save/'; */
        /* window.document.close(); */
        /* window.focus(); */
        /* this.document.location.href = "https://web.archive.org/save/"; */
        return false;
    } else if (document.readyState === "complete") { /* Wait for the page to finish loading */
        console.log("User is on WBM. Ticking boxes.");
        /* document.getElementById("web-save-url-input").value = targetUrl; */
        var urlInput = document.getElementById("web-save-url-input")
        urlInput.focus();
        urlInput.select();
        if (document.execCommand('paste')) {
            document.getElementById("web-save-url-input").val();
        }
        var targetBoolean = document.getElementById("capture_outlinks").checked
        document.getElementById("capture_outlinks").checked     = !targetBoolean; /* Save outlinks */
        document.getElementById("capture_all").checked          = !targetBoolean; /* Save error pages */
        document.getElementById("capture_screenshot").checked   = !targetBoolean; /* Save screen shot */
        document.getElementById("wm-save-mywebarchive").checked = !targetBoolean; /* Save also in my web archive */
        document.getElementById("email_result").checked         = !targetBoolean; /* Please email me the results */

        //var saveButton = document.getElementsByClassName("web-save-button").click(); /* "web-save-button web_button web_text" */
        //saveButton.onclick(function() {/*Do something*/});
        setTimeout(function() {}, 100)
        document.forms["web-save-form"].submit();
    } else {
        console.warn("User is on WBM, but is seems that page is not loaded yet.");
    }

    if (navigator.clipboard) {
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
        navigator.clipboard.readText()
        .then(text => {
            /* `text` contains the text read from the clipboard */
            console.warn("Clipboard content: ", text);
            /* const URLsFilter = ["http://", "https://", "www."]; */
            if ((text.slice(0, 4) == "www.") || (text.slice(0, 7) == "http://") || (text.slice(0, 8) == "https://")) {
                console.log("Clipboard content is valid URl.");
                document.getElementById('web-save-url-input').value = text;
            } else {
                console.error("Clipboard content is not valid URl.");
            }
        })
        .catch(err => {
            /* maybe user didn't grant access to read from clipboard */
            console.log('Something went wrong', err);
        });
    } else {
        /* nope 😢. Use execCommand or leave the feature off */
        console.error("Fatal error: navigator.clipboard is not avaliable, exiting.")
    };

    if (debugOn) console.log("Bookmarklet stops executing.");
    return false;
})();
