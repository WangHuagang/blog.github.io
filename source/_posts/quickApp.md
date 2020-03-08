---
title: 快运用 | 入门体验小教程 | 快到飞起
date: 2018-04-04 17:02:42
tags: [快运用]
categories: 快运用
comments: true
top: 32
copyright: true
# password: 123
keywords: 快运用，快运用入门教程
---

#### 什么是快运用

1. 快应用是基于手机硬件平台的新型应用形态，标准是由主流手机厂商组成的快应用联盟联合制定。

2. 快应用标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台，以平台化的生态模式对个人开发者和企业开发者全品类开放。

3. 快应用具备传统APP完整的应用体验，无需安装、即点即用。

详情可见快运用官网[官网](https://www.quickapp.cn/)

#### 前言

2018年3月20日，小米、中兴、华为、金立、联想、魅族、努比亚、OPPO、vivo、一加，共十家手机厂商在北京联合召开快应用标准启动发布会，手机厂商与中国信息通信研究院、电信终端产业协会、中国软件行业协会及数百家知名移动互联网应用企业共襄盛举，共同见证移动应用新生态的到来。

感觉看起来很牛逼，小编也想去看看究竟是个什么玩意儿。通过小编到官网的一探究竟，发现和Vue.js很相似，不管是结构还是语法上都很类似。好吧，话不多少，随着小编一起去体验一把吧。

#### 准备工作
1. 这里的入门教程
2. 一台安卓手机或者是模拟器
3. 一台电脑

#### 出发

##### 1.搭建环境
【安装node.js】
需安装6.0以上版本的NodeJS，请从NodeJS官网下载，推荐v6.11.3
注意: 不要使用8.0.*版本．这个版本内部ZipStream实现与node-archive包不兼容，会引起报错
这是官方推荐的版本

【安装工具hap-toolkit】
通过npm仓库安装，在命令行中执行以下命令：
`npm install -g hap-toolkit`
在命令行中执行hap -V会输出版本信息表示hap-toolkit安装成功，注意V是大写。

【创建工程】
新建一个文件夹，打开命令行，并cd到新建的文件夹目录下，进行初始化项目，执行以下命令：
`
 hap init YourProjectName
`
【安装依赖】
一定要cd到你初始化的项目目录下，不是当前目录哦
`
npm install
`
【编译项目】
在项目文件夹下，执行以下命令：
`
npm run build
`
这是，可能会报如下的错
![](/images/buildErr.png)

淡定，只需要执行一次 hap update --force 即可解决, 对包强制进行升级。
![](/images/ferk.png)

然后再执行npm run build进行编译便能成功，可以看到如下界面。
![](/images/build.png)

编译成功以后，工程项目会多处两个文件夹：

build：存放编译后的页面js文件和素材

dist：存放编译打包生成的rpk压缩文件，这个rpk就是快应用的最终执行文件了。

【最后一步，预览项目】
你的手机或者模拟器需要安装 [快应用调试器](https://statres.quickapp.cn/quickapp/quickapp/201803/file/quickapp_debugger.apk) 和 [平台预览版](https://statres.quickapp.cn/quickapp/quickapp/201803/file/quickapp_platform_preview_release.apk) 下载后用直接USB或者QQ传输安装到手机。注意，两个apk都要安装！平台预览版是模拟快应用的运行时环境的。

安装前面编译出来的rpk文件

方法一： 本地安装预览

将你的工程中/dist目录下编译产出的rpk文件，复制到手机文件系统中。
打开手机上的“快应用调试器” 点击“本地安装” 选择手机文件系统前面复制进来的rpk文件，即可预览到你的快应用的界面。

方法二： 扫码预览
在项目文件夹下运行以下命令
`
npm run server
`
服务器启动后会显示如下的二维码，打开手机上的“快应用调试器”，点击“扫码安装”，扫这个二维码即可安装快应用进行预览。
![](/images/ewm.png)
>推荐使用方法一，方法二可能扫描识别不了二维码。

如果看到如下界面，表示你已经成功开启了【快运用】的大门了，可以愉快的开始学习快运用了。
![](/images/quick2.png)
![](/images/quick3.png)
![](/images/quick1.png)

OK,至此快运用的介绍就到这里了。如果感兴趣的可以到官网了解更多[官方文档](https://doc.quickapp.cn/)

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>