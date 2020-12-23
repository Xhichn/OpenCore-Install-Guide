(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{519:function(e,v,t){e.exports=t.p+"assets/img/ia32-x64.aa5dccd9.png"},520:function(e,v,t){e.exports=t.p+"assets/img/efi-moved.87262fda.png"},521:function(e,v,t){e.exports=t.p+"assets/img/base-efi.4dff73e0.png"},522:function(e,v,t){e.exports=t.p+"assets/img/clean-efi.5f36d3ad.png"},523:function(e,v,t){e.exports=t.p+"assets/img/populated-efi.bfd59122.png"},633:function(e,v,t){"use strict";t.r(v);var r=t(25),_=Object(r.a)({},(function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"添加-opencore-的基本文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加-opencore-的基本文件"}},[e._v("#")]),e._v(" 添加 OpenCore 的基本文件")]),e._v(" "),r("ul",[r("li",[e._v("支持的版本：0.6.4")])]),e._v(" "),r("p",[e._v("你需要获取在 "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg 的发布"),r("OutboundLink")],1),e._v(" 中获取 EFI 文件夹以配置 OpenCore 的目录结构。注意，它将会在 IA32 或 X64 目录下，分别用于前期的 32 位硬件和后期的 64 位硬件：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(519),alt:""}})]),e._v(" "),r("p",[e._v("关于 DEBUG vs RELEASE 版本：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("DEBUG")]),e._v("：可以很好地帮助调试启动问题，但是也会加入一些明显的启动延迟时间（例如：进入引导菜单之前的 3-5 秒）。安装后可以轻松的切换到 RELEASE 版本")]),e._v(" "),r("li",[r("strong",[e._v("RELEASE")]),e._v("：更短的启动时间，但是实际上没有 OpenCore 提供的实用的 DEBUG 信息，所以进行故障排除会变得更难。")])]),e._v(" "),r("p",[e._v("并且，当你下载好以后，将 EFI 文件夹（来自 OpenCorePkg）放置到你的 EFI 分区的根目录下：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(520),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("注意")]),e._v("：")]),e._v(" "),r("ul",[r("li",[e._v("**Windows 用户：**您需要将 EFI 文件夹放在您之前制作的 USB 驱动器的根目录下")]),e._v(" "),r("li",[e._v("**Linux 用户：**这就是我们之前创建的 "),r("code",[e._v("OPENCORE")]),e._v(" 分区\n"),r("ul",[r("li",[e._v("注意，方法 1 只创建了 1 个分区，但是方法 2 创建了 2 个分区")])])])]),e._v(" "),r("p",[e._v("现在打开我们的 EFI 文件夹然后看看里面有些什么：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(521),alt:"基本的 EFI 文件夹"}})]),e._v(" "),r("p",[e._v("现在你要注意到是，"),r("code",[e._v("Drivers")]),e._v(" 和 "),r("code",[e._v("Tools")]),e._v(" 文件夹中有一些文件，我们大多数情况下不需要这些：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("从 Drivers 文件夹删除：")])]),e._v(" "),r("ul",[r("li",[e._v("AudioDxe.efi\n"),r("ul",[r("li",[e._v("与 macOS 中的音频支持没有关系")])])]),e._v(" "),r("li",[e._v("CrScreenshotDxe.efi\n"),r("ul",[r("li",[e._v("用于在 UEFI 中创建截图，我们不需要")])])]),e._v(" "),r("li",[e._v("OpenUsbKbDxe.efi\n"),r("ul",[r("li",[e._v("用于在"),r("strong",[e._v("经典系统上运行 DuetPkg")]),e._v(" 的 OpenCore 引导菜单，"),r("a",{attrs:{href:"https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653",target:"_blank",rel:"noopener noreferrer"}},[e._v("不推荐，并且在 Ivy Bridge 和更新的平台上甚至是有害的"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("UsbMouseDxe.efi\n"),r("ul",[r("li",[e._v("和 OpenUsbKbDxe 一样，应当只有使用 DuetPkg 的经典系统才需要")])])]),e._v(" "),r("li",[e._v("NvmExpressDxe.efi\n"),r("ul",[r("li",[e._v("用于 NVMe 驱动没有内建于固件中的 Haswell 和更旧的平台")])])]),e._v(" "),r("li",[e._v("XhciDxe.efi\n"),r("ul",[r("li",[e._v("用于 XHCI 驱动没有内建于固件中的 Sandy Bridge 和更旧的平台")]),e._v(" "),r("li",[e._v("只有当你在一台较旧的设备上使用一个 USB 3.0 扩展卡时才需要")])])]),e._v(" "),r("li",[e._v("HiiDatabase.efi\n"),r("ul",[r("li",[e._v("用于在 Sandy Bridge 和更旧的平台上修复例如 OpenShell.efi 的图形界面支持")]),e._v(" "),r("li",[e._v("启动时不需要")])])]),e._v(" "),r("li",[e._v("OpenCanopy.efi\n"),r("ul",[r("li",[e._v("这是 OpenCore 的可选图形界面，我们将会在"),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装后指南"),r("OutboundLink")],1),e._v("中认真讨论如何设置它，所以现在先删除它")])])]),e._v(" "),r("li",[e._v("Ps2KeyboardDxe.efi + Ps2MouseDxe.efi\n"),r("ul",[r("li",[e._v("明显能知道你什么时候需要它，USB 键鼠的用户不需要它")]),e._v(" "),r("li",[e._v("记住：PS2 ≠ USB")])])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("从 Tools 文件夹删除所有文件：")])]),e._v(" "),r("ul",[r("li",[e._v("很多人都会把它们全部保留，但我建议只保留 OpenShell.efi 用于故障排除")])])])]),e._v(" "),r("p",[e._v("一份清理后的 EFI：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(522),alt:"整洁的 EFI"}})]),e._v(" "),r("p",[e._v("现在你可以放置"),r("strong",[e._v("你的")]),e._v("必需的固件驱动到（.efi）"),r("em",[e._v("Drivers")]),e._v(" 文件夹中，还有内核扩展/ACPI 也放置到它们各自的文件夹中。查看"),r("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("收集文件")]),e._v("以获得关于你需要使用哪些文件的更多信息。")],1),e._v(" "),r("ul",[r("li",[e._v("请注意，Clover 的 UEFI 驱动不支持 OpenCore！（EmuVariableUEFI、AptioMemoryFix、OsxAptioFixDrv 等等）。请查看"),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion/clover-efi.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("从 Clover 的固件驱动转换到 OpenCore 的固件驱动"),r("OutboundLink")],1),e._v("以获得更多关于被支持的驱动以及合并到 OpenCore 的驱动的信息。")])]),e._v(" "),r("p",[e._v("这是一份添加好文件的 EFI ***可能***的样子（你的也许不一样）：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(523),alt:"添加了文件的 EFI 文件夹"}})]),e._v(" "),r("p",[r("strong",[e._v("记住")]),e._v("：")]),e._v(" "),r("ul",[r("li",[e._v("SSDT 和自定义的 DSDT（"),r("code",[e._v(".aml")]),e._v("）放入 ACPI 文件夹")]),e._v(" "),r("li",[e._v("内核扩展（"),r("code",[e._v(".kext")]),e._v("）放入 Kexts 文件夹")]),e._v(" "),r("li",[e._v("固件驱动（"),r("code",[e._v(".efi")]),e._v("）放入 Drivers 文件夹")])]),e._v(" "),r("h1",{attrs:{id:"现在所有事项都已完成-跳转到收集文件以获得需要的内核扩展和固件驱动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现在所有事项都已完成-跳转到收集文件以获得需要的内核扩展和固件驱动"}},[e._v("#")]),e._v(" 现在所有事项都已完成，跳转到"),r("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("收集文件")]),e._v("以获得需要的内核扩展和固件驱动")],1)])}),[],!1,null,null,null);v.default=_.exports}}]);