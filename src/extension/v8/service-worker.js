
console.log("Script initiated.");

chrome.action.onClicked.addListener((tab) => {
  if (
    (tab.url.includes('http://web.archive.org/save')) ||
    (tab.url.includes('https://web.archive.org/save'))
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id }, files : [ "./content_script.js" ],
    }).then(() => console.log("Script injected."));
  }
});
