// Background service worker for Dearchiver extension

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openInArchive',
    title: 'Open in archive.is',
    contexts: ['link']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'openInArchive' && info.linkUrl) {
    const archiveUrl = `https://archive.is/${info.linkUrl}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});
