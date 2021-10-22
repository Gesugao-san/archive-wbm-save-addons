javascript: (function() {
    var debugOn = true;
    let checkBoxesIDS = ["capture_outlinks", "capture_all", "capture_screenshot", "wm-save-mywebarchive", "email_result"];
    if (debugOn) console.log("[\"WayBack Mashine\" (WBM) bookmarklet][log]\nStatus: script starts executing.");
    const URLsFilter = ["www.", "http://", "https://"];
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (WBMsites.includes(this.document.location.href)) {
        console.error("[WBM bookmarklet][log]\nUser is on WBM. \nActions:\n1. Exiting. \nReason:\nBookmarklet now reqs one-click.");
        alert("[WBM bookmarklet]: Go on target website and just click on bookmarklet one time.");
    } else {
        console.log("[WBM bookmarklet][log]\nUser is not on WBM. Target acquired.\nActions:\n1. Sending POST-req form and opening WBM.");
        var formHidden = document.createElement("form"); // https://stackoverflow.com/a/6964949
        formHidden.setAttribute('class', "web-save-form");
        formHidden.setAttribute('id', "web-save-form");
        formHidden.setAttribute('name', "wwmform_save");
        formHidden.setAttribute('action', "https://web.archive.org/save/");
        formHidden.setAttribute('method', "POST");
        //formHidden.setAttribute("hidden", true);
        var urlInput = document.createElement("input"); //input element, text
        urlInput.setAttribute('type', "text");
        urlInput.setAttribute('class', "form-control web-save-url-input web_input web_text");
        urlInput.setAttribute('id', "web-save-url-input");
        urlInput.setAttribute('name', "url");
        urlInput.value = this.document.location.href;
        formHidden.appendChild(urlInput);
        for (let checkBoxID of checkBoxesIDS) {
            var element = document.createElement("input"); //input element, text
            element.setAttribute('type', "checkbox");
            element.setAttribute('name', checkBoxID);
            element.setAttribute('id', checkBoxID);
            element.checked = true; // https://stackoverflow.com/a/20140802
            formHidden.appendChild(element);
        }
        var submitButton = document.createElement("input"); //input element, Submit button
        submitButton.setAttribute('type', "submit");
        submitButton.setAttribute('class', "web-save-button web_button web_text");
        submitButton.setAttribute('value', "Submit");
        formHidden.appendChild(submitButton);
        document.getElementsByTagName('body')[0].appendChild(formHidden);
        //setTimeout(function() {formHidden.submit();}, 100); /// BUG: RESET THE AUTH ON WBM!!!
        var win = window.open(); // https://stackoverflow.com/a/20235958
        win.document.write('<iframe width="560" height="315" src="//www.youtube.com/embed/mTWfqi3-3qU" frameborder="0" allowfullscreen></iframe>')
        win.document.write('<iframe width="560" height="315" src="//www.youtube.com/embed/mTWfqi3-3qU" frameborder="0" allowfullscreen></iframe>')
        // and see: https://web.archive.org/_static/js/bundle-spn.js
    }
    if (debugOn) console.log("[WBM bookmarklet][log]\nStatus: script stops executing.\nReason: EOF.");
    return false;
})();
