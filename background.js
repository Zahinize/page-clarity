chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.injectGPT && sender.tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["main-script.js"],
      world: "MAIN", // 🔥 this is the key
    });
  }
});
