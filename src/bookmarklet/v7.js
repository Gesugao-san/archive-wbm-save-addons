javascript: (function() {
  var debugOn = false;
  const userLocation = this.document.location.href;
  check();
  function check() {
    if (debugOn) console.log("[\"WayBack Mashine\" (WBM) bookmarklet][log]\nStatus: script starts executing.");
    const URLsFilter = ["www.", "http://", "https://"];
    const WBMsites = ["https://web.archive.org/save/", "https://web.archive.org/save"];
    if (!WBMsites.includes(userLocation)) {
      console.log("[WBM bookmarklet][log]\nUser is not on WBM. Target acquired.\nActions:\n1. Copying to current URL to clipboard.\n2. Opening WBM.\nTo second step, click on me on WBM page!");
      var i = document.createElement('iframe'); // https://stackoverflow.com/a/635750
      i.style.display = 'none';
      //i.onload = function() { i.parentNode.removeChild(i); };
      i.src = 'https://web.archive.org/save'; // no auth
      i.setAttribute("height", "230");
      i.setAttribute("width", "360");
      document.body.appendChild(i);
      console.log("[WBM bookmarklet][log]\nOpened! Are we alive?");
      //return false;
      // HELP https://stackoverflow.com/a/54697782
    };
  };
  save();
  function save() {
    console.log("[WBM bookmarklet][log]\nUser is on WBM. Ticking boxes.");
    this.document.getElementById("web-save-url-input").value = userLocation;
    var inputs = this.document.querySelectorAll("input[type='checkbox']");
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked = true;
    }
    //this.document.getElementByType("submit").focus();
    //console.info("[WBM bookmarklet][info]\nForm will submitted!");
    //setTimeout(function() {document.forms["web-save-form"].submit();}, 1500);
  }
  if (debugOn) console.log("[WBM bookmarklet][log]\nStatus: script stops executing.\nReason: EOF.");
  void 0; //return false;
})();
