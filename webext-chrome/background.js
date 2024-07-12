if (typeof browser === "undefined") {
  browser = chrome;
}

console.log("LinkDown for Browsers: I am successfully triggered!");
// Create Context Menu Item

browser.contextMenus.create({
  id: "download-video",
  title: browser.i18n.getMessage("download_video"),
  contexts: ["all"],
});

// Listen for Clicks on Context Menu Item
browser.contextMenus.onClicked.addListener(async function(info, tab) {
  console.log(info);
  // Get URL
  var url = info.linkUrl || info.srcUrl || info.pageUrl;
  // Determine to Use BBDown / you-get / yt-dlp and Execute Commands
  var command;
  if (url.indexOf("bilibili.com") !== -1) {
    var cookies = await browser.cookies.getAll({ url: "https://www.bilibili.com" });
    var cookie = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    if (cookies.length > 0) {
      command =
        `start bbdown.exe ${url} --work-dir "%HOMEPATH%/Downloads/Video" -tv --cookie "${cookie}"`;
    } else {
      command =
       `start bbdown.exe ${url} --work-dir "%HOMEPATH%/Downloads/Video"`;
    }
  } else {
    command =
       'start yt-dlp.exe --output "../../../Downloads/Video/%(title)s.%(ext)s" --merge-output-format mp4 ' +
    url;
  }
  try {
    await browser.runtime.sendNativeMessage("linkdown", { command });
    console.log("LinkDown for Browsers: Command Sent: " + command); 
  } catch (error) {
    console.error(error);
    console.error("LinkDown for Browsers: Failed to Send Command: " + command); 
  }
});
