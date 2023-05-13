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
  if (url.indexOf("music.163.com") !== -1 ||
  url.indexOf("56.com") !== -1 ||
  url.indexOf("acfun.cn") !== -1 ||
  url.indexOf("baidu.com") !== -1 ||
  url.indexOf("baomihua.com") !== -1 ||
  url.indexOf("douyutv.com") !== -1 ||
  url.indexOf("ifeng.com") !== -1 ||
  url.indexOf("fun.tv") !== -1 ||
  url.indexOf("iqiyi.com") !== -1 ||
  url.indexOf("kou.cn") !== -1 ||
  url.indexOf("ku6.com") !== -1 ||
  url.indexOf("kugou.com") !== -1 ||
  url.indexOf("kuwo.cn") !== -1 ||
  url.indexOf("le.com") !== -1 ||
  url.indexOf("lizhi.fm") !== -1 ||
  url.indexOf("lrts.me") !== -1 ||
  url.indexOf("miaopai.com") !== -1 ||
  url.indexOf("miomio.tv") !== -1 ||
  url.indexOf("missevan.com") !== -1 ||
  url.indexOf("pixnet.net") !== -1 ||
  url.indexOf("pptv.com") !== -1 ||
  url.indexOf("iqilu.com") !== -1 ||
  url.indexOf("qq.com") !== -1 ||
  url.indexOf("sina.com.cn") !== -1 ||
  url.indexOf("weibo.com") !== -1 ||
  url.indexOf("sohu.com") !== -1 ||
  url.indexOf("tudou.com") !== -1 ||
  url.indexOf("isuntv.com") !== -1 ||
  url.indexOf("youku.com") !== -1 ||
  url.indexOf("zhanqi.tv") !== -1 ||
  url.indexOf("cntv.cn") !== -1 ||
  url.indexOf("mgtv.com") !== -1 ||
  url.indexOf("huomao.com") !== -1 ||
  url.indexOf("356yg.com") !== -1 ||
  url.indexOf("ixigua.com") !== -1 ||
  url.indexOf("xinpianchang.com") !== -1 ||
  url.indexOf("kuaishou.com") !== -1 ||
  url.indexOf("douyin.com") !== -1 ||
  url.indexOf("zhibo.tv") !== -1 ||
  url.indexOf("zhihu.com") !== -1) {
    command =
      'start you-get.exe -o "%HOMEPATH%/Downloads/Video" ' + url;
  } else if (url.indexOf("bilibili.com") !== -1) {
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
