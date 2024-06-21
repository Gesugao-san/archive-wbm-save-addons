
console.log("Script initiated.");

chrome.action.onClicked.addListener((tab) => {
  /*if (!tab.url.includes('chrome://')) {*/
  if (!tab) {return;}
  if (!tab.url) {return;}
  if (!tab.url.includes('https://web.archive.org/save')) {return;}
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, files : [ "./content_script.js" ],
  }).then(() => console.log("Script injected.")); // Notification on Completion
});

chrome.tabs.onCreated.addListener((tab) => {
  if (!tab) {return;}
  if (!tab.url) {return;}
  if (!tab.url.includes('https://web.archive.org/save')) {return;}
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, files : [ "./content_script.js" ],
  }).then(() => console.log("Script injected.")); // Notification on Completion
});

chrome.tabs.onUpdated.addListener((tab) => {
  if (!tab) {return;}
  if (!tab.url) {return;}
  if (!tab.url.includes('https://web.archive.org/save')) {return;}
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, files : [ "./content_script.js" ],
  }).then(() => console.log("Script injected.")); // Notification on Completion
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.action.disable()

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'web.archive.org/save', schemes: ['https', 'http'] },
            /* css: ['.js-yearly-contributions'], */
          }),
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ])
  })
})

chrome.storage.local.set({
  isInjected: false
}).then(() => {
  console.log("Value is set");
});

chrome.runtime.onMessage.addListener((message, tab) => {
  if (message === 'runInject') {
    chrome.storage.local.set({
      isInjected: true,
    },
    async function () {
      //const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['./js/content_script.js'],
      })
    }
  )}
})

