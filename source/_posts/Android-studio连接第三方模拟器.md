---
title: 夜神 Android studio连接配置第三方模拟器·夜神
date: 2018-03-30 17:02:42
tags: [其他]
categories: 其他
comments: true
top: 29
copyright: true
# password: 123
keywords: 夜神 Android studio连接配置第三方模拟器·夜神 ，Android studio, 第三方模拟器
---
### Android Studio怎样连接配置第三方模拟器

#### 前言

想必大家都体验了一把Android studio的环境搭建，总会出现莫名其妙的问题，刚刚搭建好，写好“Hello World”准备运行，折腾了半天，结果AS自带的模拟器运行不上，缺少一个加速软件。到这里，心已经凉了一大截了，好吧，换第三方模拟器，genymotion肯定是首选。到官网进行注册，然后下载下来，傻瓜式的安装好genymotion和virtualbox，眼看就要成功了，报错，纳尼！！！居然报错了！没错，他就是报错了。又捣鼓半天，放弃了，再找找其他的第三方模拟器吧，好吧，现在直接步入正题。
![](/images/err.png)

#### 夜神模拟器

夜神安卓模拟器，电脑玩手游的新一代神器。是当前唯一一款采用世界领先的内核技术（基于Android4.4.2 版本内核针在电脑上运行深度开发），具有同类模拟器中最快的运行速度 和最稳定的性能。玩家可以通过本软件在电脑上玩手机游戏， 感受更大的屏幕、更快的速度、更完美的操控体验。
直接步入正题。
- 下载夜神模拟器  [官网下载](https://www.yeshen.com/)
- 傻瓜式安装好夜神。
- 运行夜神模拟器。
![](/images/yeshen.png)
- 打开命令行窗口。
- cd到夜神的安装目录（如cd D:\Program Files\NOX\Nox\bin）。
- 执行以下命令：`nox_adb.exe connect 127.0.0.1:62001`，连接上模拟器。
![](/images/as3.png)
- 在Android studio中运行app，弹出的ADB中选择连接好的夜神就可以了。
![](/images/as1.png)
![](/images/as2.png)
- 若Android Studio连接不上夜神，重启连接模拟器即可链接上。

***

OK，现在你就可以愉快的敲你的代码了！有什么问题可以给我留言哦。


<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>