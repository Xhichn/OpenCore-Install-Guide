(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{637:function(t,r,n){"use strict";n.r(r);var e=n(25),o=Object(e.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"opencore-快速入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opencore-快速入门"}},[t._v("#")]),t._v(" OpenCore 快速入门")]),t._v(" "),n("p",[t._v("在我们开始制作一套 OpenCore 基层系统之前，我们需要先了解一些事情。")]),t._v(" "),n("h2",{attrs:{id:"先决条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[t._v("#")]),t._v(" 先决条件")]),t._v(" "),n("ol",[n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),t._v("时间和耐心。\n"),n("ul",[n("li",[t._v("如果你有截止日期的限制或者重要的工作，不要开始做这件事。Hackintosh 不应该在你主要用于工作的设备上被作为一项依赖。")])])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),n("strong",[t._v("了解你的硬件")]),t._v(" "),n("ul",[n("li",[t._v("你的 CPU 名称和生产时期")]),t._v(" "),n("li",[t._v("你的显卡")]),t._v(" "),n("li",[t._v("你的存储设备（机械硬盘/固态硬盘，NVMe/AHCI/RAID/IDE 配置）")]),t._v(" "),n("li",[t._v("如果你的笔记本电脑/台式电脑来自于一家设备制造商，你还需要了解它的型号")]),t._v(" "),n("li",[t._v("你的"),n("strong",[t._v("以太网芯片组")])]),t._v(" "),n("li",[t._v("你的无线局域网/蓝牙芯片组")])])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),n("strong",[t._v("对于命令行的基本知识，知道如何使用终端/命令行")]),t._v(" "),n("ul",[n("li",[t._v("这不仅仅只是[重要]，这是整个指南的基础。如果你不知道如何 "),n("code",[t._v("cd")]),t._v(" 到一个目录或者删除一个文件，很抱歉，我们没办法帮助你。")])])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),t._v("有一台与在 "),n("em",[n("strong",[t._v("兼容性")])]),t._v(" 部分看到的相似的设备。\n"),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/macos-limits.html"}},[t._v("关于硬件限制的页面")])],1)])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),t._v("最少拥有：\n"),n("ul",[n("li",[t._v("12GB USB，如果你打算使用 macOS 创建 USB")]),t._v(" "),n("li",[t._v("4GB USB，如果你打算使用 Windows 或 Linux 创建 USB")])])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),t._v(" "),n("strong",[t._v("以太网连接")]),t._v("（不是 Wi-Fi 适配器，并且 USB 以太网适配器需要 macOS 的支持才可以工作），而且你必须知道你的以太网网卡的型号\n"),n("ul",[n("li",[t._v("你必须有一个物理以太网接口或者一个兼容的 macOS 的以太网适配器/网卡。如果你有一个"),n("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("兼容的无线网卡"),n("OutboundLink")],1),t._v("，也可以使用它。\n"),n("ul",[n("li",[t._v("注意，大多数的无线网卡是不被 macOS 支持的")])])]),t._v(" "),n("li",[t._v("如果你无法使用以太网，但是有一台 Android 手机，你可以将你的 Android 手机连接至 Wi-Fi 然后用 USB 和 "),n("a",{attrs:{href:"https://joshuawise.com/horndis#available_versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("HoRNDIS"),n("OutboundLink")],1),t._v(" 使你的 PC 连接至 Internet。")])])]),t._v(" "),n("li",[n("span",{staticStyle:{color:"red"}},[n("em",[n("strong",[t._v("[重要]")])])]),n("strong",[t._v("合理的系统安装：")]),t._v(" "),n("ul",[n("li",[t._v("像这样：\n"),n("ul",[n("li",[t._v("macOS（一个较新的版本会更好）")]),t._v(" "),n("li",[t._v("Windows（Windows 10，版本 1703 或者更高版本）")]),t._v(" "),n("li",[t._v("Linux（纯净且正常运行，带有 Python 2.7 或更高版本）")])])]),t._v(" "),n("li",[t._v("对于 Windows 和 Linux 用户，你正在使用的磁盘驱动器上要留有 "),n("strong",[t._v("15GB")]),t._v(" 空闲空间。在 Windows 中，你的系统盘 (C:) 必须最少留有 15GB 的空闲。")]),t._v(" "),n("li",[t._v("对于 macOS 用户，系统盘上要留有 "),n("strong",[t._v("30GB")]),t._v(" 的空闲空间。")]),t._v(" "),n("li",[t._v("本指南中的很多工具也依赖于"),n("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("已安装的 Python"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);r.default=o.exports}}]);