// Testing
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed.");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked this page!");
});
