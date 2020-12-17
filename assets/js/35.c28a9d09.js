(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{540:function(e,t,o){e.exports=o.p+"assets/img/1-boot-efi.853f625b.png"},541:function(e,t,o){e.exports=o.p+"assets/img/2-kernel-start.e0572033.png"},542:function(e,t,o){e.exports=o.p+"assets/img/5-apfs-module.b0425a3e.png"},543:function(e,t,o){e.exports=o.p+"assets/img/6-USB-setup.ba302241.png"},544:function(e,t,o){e.exports=o.p+"assets/img/8-dsmos-arrived.847041e0.png"},545:function(e,t,o){e.exports=o.p+"assets/img/9-audio.6e453f41.png"},546:function(e,t,o){e.exports=o.p+"assets/img/10-GPU.8e1643f9.png"},547:function(e,t,o){e.exports=o.p+"assets/img/11-boot.b02845ce.png"},641:function(e,t,o){"use strict";o.r(t);var s=o(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"understanding-the-macos-boot-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-macos-boot-process"}},[e._v("#")]),e._v(" Understanding the macOS Boot Process")]),e._v(" "),s("ul",[s("li",[e._v("Supported version: 0.6.4")])]),e._v(" "),s("p",[e._v("So with troubleshooting a hackintosh, it can be a bit difficult to really understand "),s("em",[e._v("where")]),e._v(" you're getting stuck as the exact keyword you're trying to search for may not match anything on google. While this page won't solve all your issues, it should at least help better understand where in the macOS boot-process you're getting stuck and hopefully give some ideas as to why you're stuck.")]),e._v(" "),s("h2",{attrs:{id:"opencore-booting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencore-booting"}},[e._v("#")]),e._v(" OpenCore Booting")]),e._v(" "),s("p",[e._v("This section will be brief, as OpenCore boot issues are fairly rare and usually simple user error:")]),e._v(" "),s("ul",[s("li",[e._v("System powers on and searches for boot devices")]),e._v(" "),s("li",[e._v("System locates BOOTx64.efi on your OpenCore USB under EFI/BOOT/")]),e._v(" "),s("li",[e._v("BOOTx64.efi is loaded which then chain-loads OpenCore.efi from EFI/OC/")]),e._v(" "),s("li",[e._v("NVRAM Properties are applied")]),e._v(" "),s("li",[e._v("EFI drivers are loaded from EFI/OC/Drivers")]),e._v(" "),s("li",[e._v("Graphics Output Protocol(GOP) is installed")]),e._v(" "),s("li",[e._v("ACPI Tables are loaded from EFI/OC/ACPI")]),e._v(" "),s("li",[e._v("SMBIOS Data is applied")]),e._v(" "),s("li",[e._v("OpenCore loads and shows you all possible boot options")]),e._v(" "),s("li",[e._v("You now boot your macOS installer")])]),e._v(" "),s("p",[e._v("If you're having issues booting at this point, main things to check for:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/opencore-issues.html#stuck-on-no-vault-provided"}},[e._v("Stuck on "),s("code",[e._v("no vault provided!")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/opencore-issues.html#can-t-see-macos-partitions"}},[e._v("Can't see macOS partitions")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/opencore-issues.html#booting-opencore-reboots-to-bios"}},[e._v("Booting OpenCore reboots to BIOS")])],1)]),e._v(" "),s("p",[e._v("For the rest of the possible issues, see here:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/opencore-issues.html"}},[e._v("OpenCore booting issues")])],1)]),e._v(" "),s("h2",{attrs:{id:"boot-efi-handoff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boot-efi-handoff"}},[e._v("#")]),e._v(" boot.efi Handoff")]),e._v(" "),s("p",[s("img",{attrs:{src:o(540),alt:""}})]),e._v(" "),s("p",[e._v("This is where macOS's bootloader(boot.efi) comes onto the scene, specifically what it does is prep the environment for the kernel to load and where OpenCore injects kexts. If you're getting stuck at this point, there's likely an issue with loading the kernel, main culprits:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#stuck-on-endrandomseed"}},[e._v("Stuck on EndRandomSeed")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#stuck-on-eb-log-exitbs-start"}},[e._v("Stuck on "),s("code",[e._v("[EB|#LOG:EXITBS:START]")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#couldn-t-allocate-runtime-area-errors"}},[s("code",[e._v("Couldn't allocate runtime area")]),e._v(" errors")])],1)]),e._v(" "),s("p",[e._v("For the rest of the possible issues, see here:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html"}},[e._v("Kernel Issues")])],1)]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": In macOS 10.15.4, Apple changed the boot.efi debugging protocol, so things will look quite a bit different from before but all the same rules still apply")]),e._v(" "),s("h2",{attrs:{id:"xnu-kernel-handoff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xnu-kernel-handoff"}},[e._v("#")]),e._v(" XNU/Kernel Handoff")]),e._v(" "),s("p",[e._v("Now that boot.efi has setup everything for us, we now get to watch the kernel do it's thing. This section is commonly referred as the "),s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/booting/booting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rooting phase"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("p",[s("img",{attrs:{src:o(541),alt:""}})]),e._v(" "),s("p",[e._v("This section is where SMBIOS data is verified, ACPI tables/Kexts are loaded and macOS tries to get everything in order. Failures here are generally a result of:")]),e._v(" "),s("ul",[s("li",[e._v("Corrupted SSDTs")]),e._v(" "),s("li",[e._v("Corrupted kexts(or incorrectly setup under your config.plist -> Kernel -> Add)")]),e._v(" "),s("li",[e._v("Messed up memory map")])]),e._v(" "),s("p",[e._v("See here for more troubleshooting info:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#kernel-panic-cannot-perform-kext-summary"}},[e._v("Kernel Panic "),s("code",[e._v("Cannot perform kext summary")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#kernel-panic-on-invalid-frame-pointer"}},[e._v("Kernel Panic on "),s("code",[e._v("Invalid frame pointer")])])],1)]),e._v(" "),s("p",[s("img",{attrs:{src:o(542),alt:""}})]),e._v(" "),s("p",[e._v("Now here we have "),s("code",[e._v("[ PCI configurations begin ]")]),e._v(", this section can be seen as a hardware test for our systems, kexts and SSDTs we injected, and where IOKit starts hardware probs to find devices to attach to.")]),e._v(" "),s("p",[e._v("The main things that are tested here:")]),e._v(" "),s("ul",[s("li",[e._v("Embedded Controllers")]),e._v(" "),s("li",[e._v("Storage(NVMe, SATA, etc)")]),e._v(" "),s("li",[e._v("PCI/e")]),e._v(" "),s("li",[e._v("NVRAM")]),e._v(" "),s("li",[e._v("RTC")]),e._v(" "),s("li",[e._v("PS2 and I2C")])]),e._v(" "),s("p",[e._v("For more specific info on how to get around this area, see here:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#stuck-on-rtc-pci-configuration-begins-previous-shutdown-hpet-hid-legacy"}},[e._v("Stuck on "),s("code",[e._v("RTC...")]),e._v(", "),s("code",[e._v("PCI Configuration Begins")]),e._v(", "),s("code",[e._v("Previous Shutdown...")]),e._v(", "),s("code",[e._v("HPET")]),e._v(", "),s("code",[e._v("HID: Legacy...")])])],1)]),e._v(" "),s("p",[s("img",{attrs:{src:o(543),alt:""}})]),e._v(" "),s("p",[e._v('This is where the 15 port limit and USB mapping comes into play, and where the infamous "Waiting for Root Device" errors pops in, main things to check for:')]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#waiting-for-root-device-or-prohibited-sign-error"}},[e._v('"Waiting for Root Device" or Prohibited Sign error')])],1)]),e._v(" "),s("p",[s("img",{attrs:{src:o(544),alt:""}})]),e._v(" "),s("p",[e._v("This is where our FakeSMC/VirtualSMC come into the scene and do their magic, DSMOS itself is a kext that verifies if your system has an SMC and will request a key. If this key is missing, then DSMOS will not decrypt the rest of the binaries and you'll get stuck here. You may also get stuck at AppleACPICPU which is just the same error.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#kextd-stall-0-appleacpicpu"}},[e._v("kextd stall[0]: AppleACPICPU")])],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Your karma check for today:\nThere once was a user that whined\nhis existing OS was so blind,\nhe'd do better to pirate an OS that ran great\nbut found his hardware declined.\nPlease don't steal Mac OS!\nReally, that's way uncool.\n(C) Apple Computer, Inc.\n")])])]),s("p",[e._v("Source: Dont Steal Mac OS X.kext")]),e._v(" "),s("p",[s("img",{attrs:{src:o(545),alt:""}})]),e._v(" "),s("p",[e._v("This is where Apple's audio driver comes in, and where AppleALC shines. Generally rare to see issues here but if you do, try disabling AppleALC and any other audio related kexts.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(546),alt:""}})]),e._v(" "),s("p",[e._v("And here we get to the GPU driver initialization, and where WhateverGreen also does its magic. Generally errors here are due to the GPU and not WhateverGreen itself, main culprits:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3"}},[e._v("Stuck on or near "),s("code",[e._v("IOConsoleUsers: gIOScreenLock...")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#black-screen-after-ioconsoleusers-gioscreenlock-on-navi"}},[e._v("Black screen after "),s("code",[e._v("IOConsoleUsers: gIOScreenLock...")]),e._v(" on Navi")])],1)]),e._v(" "),s("h2",{attrs:{id:"macos-handoff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-handoff"}},[e._v("#")]),e._v(" macOS Handoff")]),e._v(" "),s("p",[s("img",{attrs:{src:o(547),alt:""}})]),e._v(" "),s("p",[e._v("And you've finally got past all that verbose! If you're getting stuck at the Apple logo after all that verbose, then there's a couple things to check for:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#macos-frozen-right-before-login"}},[e._v("macOS frozen right before login")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#black-screen-after-ioconsoleusers-gioscreenlock-on-navi"}},[e._v("Black screen after "),s("code",[e._v("IOConsoleUsers: gIOScreenLock...")]),e._v(" on Navi")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/userspace-issues.html#frozen-in-the-macos-installer-after-30-seconds"}},[e._v("Frozen in the macOS installer after 30 seconds")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);