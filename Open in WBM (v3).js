javascript: (function() {
    var debugOn = false;
    if (debugOn) console.log("[\"WayBack Mashine\" (WBM) bookmarklet][log]\nStatus: script starts executing.");
    const URLsFilter = ["www.", "http://", "https://"];
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (WBMsites.includes(this.document.location.href)) {
        console.error("[WBM bookmarklet][log]\nUser is on WBM. \nActions:\n1. Exiting. \nReason:\nBookmarklet now reqs one-click.");
        alert("[WBM bookmarklet]: Go on target website and just click on bookmarklet one time.");
    } else {
        console.log("[WBM bookmarklet][log]\nUser is not on WBM. Target acquired.\nActions:\n1. Copying to current URL to clipboard.\n2. Opening WBM.\nTo second step, click on me on WBM page!");
        // from: https://web.archive.org/_static/js/bundle-spn.js
    }
    if (debugOn) console.log("[WBM bookmarklet][log]\nStatus: script stops executing.\nReason: EOF.");
    return false;
})();
