javascript: (function() {
    var debugOn = false;
    let checkBoxes = ["capture_outlinks", "capture_all", "capture_screenshot", "wm-save-mywebarchive", "email_result"];
    if (debugOn) console.log("[\"WayBack Mashine\" (WBM) bookmarklet][log]\nStatus: script starts executing.");
    const URLsFilter = ["www.", "http://", "https://"];
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (WBMsites.includes(this.document.location.href)) {
        console.error("[WBM bookmarklet][log]\nUser is on WBM. \nActions:\n1. Exiting. \nReason:\nBookmarklet now reqs one-click.");
        alert("[WBM bookmarklet]: Go on target website and just click on bookmarklet one time.");
    } else {
        console.log("[WBM bookmarklet][log]\nUser is not on WBM. Target acquired.\nActions:\n1. Sending POST-req form and opening WBM.");
        var f = document.createElement("form"); // https://stackoverflow.com/a/6964949
        f.setAttribute('method',"post");
        f.setAttribute('action',"submit.php");
        f.setAttribute('action',"submit.php");
        
        var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('name',"username");
        
        // from: https://web.archive.org/_static/js/bundle-spn.js
    }
    if (debugOn) console.log("[WBM bookmarklet][log]\nStatus: script stops executing.\nReason: EOF.");
    return false;
})();
element.setAttribute("hidden", true);