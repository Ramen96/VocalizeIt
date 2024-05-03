(async () => {
  const src = chrome.runtime.getURL("background.js");
  const contentMain = await import(src);
  contentMain.main();
})();