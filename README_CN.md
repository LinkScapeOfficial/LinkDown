<p align="center">
<img src="https://github.com/LinkScapeOfficial/LinkDown/blob/main/oringin.png?raw=true" width = "256" height = "256">
<h1 align="center">LinkDown</h1>
<p align="center">
<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg">
<p>
<p align="center">
<img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/LinkScapeOfficial/LinkDown/total?style=for-the-badge">
<img alt="GitHub" src="https://img.shields.io/github/license/LinkScapeOfficial/LinkDown?style=for-the-badge">
<p>

[English](https://github.com/LinkScapeOfficial/LinkDown/blob/main/README.md) | 简体中文

## 捐款

通过 Stripe 捐款：[链接](https://linkscape.app/donate)

[<img src="https://bank.hackclub.com/brand/hcb-logo-original-light.svg">](https://hackclub.com/bank)

## 讨论群

Discord: https://discord.gg/WDdvabyKaH

## 下载链接

https://github.com/LinkScapeOfficial/LinkDown/releases/latest/download/linkdown_setup.exe

------

软件开发：**吳承泳**（[@thomaswcy](https://github.com/thomaswcy)，LinkScape 创始人）

英语翻译：**劉欣恬**（[@MeliLXT](https://github.com/MeliLXT)，LinkScape 创始人）

商标设计：**Tzu-Yun Hsiao**（[@Powerlean](https://github.com/Powerlean)，LinkScape 首席设计师）

教程编写：奔跑中的奶酪（[@RunningCheese](https://github.com/RunningCheese)）

------

## 软件概述

本软件集成了 you-get，yt-dlp，ffmpeg，python 四款软件进行自动配置，并且编写了一个简单易用的浏览器附加组件，使用户下载视频时省去各种繁琐步骤。

## 软件开发

本软件基于 Inno Setup 开发，源文件在 repo 中，下载项目后运行 `LinkDown_Wizzard.iss` 即可编译。

LinkDown for Browsers 的 Firefox Manifest V2 版本源代码在repo中的 `webext-firefox` 目录中；Chrome Manifest V3 版本源代码在repo中的 `webext-chrome` 目录中。

*注：Firefox 由于当前 ESR 版本尚不支持 Manifest V3，在 Firefox 114 ESR 于 2023年6月7日发布后将会改用 Manifest V3。*

## 使用教程

### 一、安装程序

在 [下载链接](#下载链接) 下载并运行 `linkdown_setup.exe`。

### 二、安装附加组件

安装附加组件 **LinkDown for Browsers**。地址：[Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/linkdown-for-browsers/)、[Chrome](https://chrome.google.com/webstore/detail/linkdown-for-browsers/lnckamlbboggdkkgnkaocibpnilhemhc)、[代理下载](https://cdn.linkscape.app/linkdown_webext.crx)。

### 三、使用

在网页上右键，然后选择 `下载视频` 选项，如下图所示：

![linkdown_usage_cn](https://cdn.linkscape.app/linkdown_usage_cn.gif)

------

## 引用

本项目引用了大量软件，详情请查看 [REFERENCE.md](https://github.com/LinkScapeFoudation/LinkDown/blob/main/REFERENCE.md).
