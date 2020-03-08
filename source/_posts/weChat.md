---
title: 微信小程序入门（一）之开发工具介绍
author: 王华港
date: 2018-10-06 19:02:59
tags: [微信小程序]
categories: 微信小程序
comments: true
top: 52
copyright: true
keywords: 小程序,微信小程序,WeChat
---
![](/images/weChatcover1.png)

### 什么是小程序

英文名 mini program,一种崭新的应用程式。2016年张小龙（微信创始人）提出微信应用号，当时他的描述是，小程序是一种不需要下载安装即可使用的应用，他实现了应用触手可及的梦想，用户扫一扫或者搜一下即可打开应用，也体现了用完即走的理念，用户不用关心是否安装太多应用的问题，应用无处不在，随时可用，但又无序安装卸载。因为苹果公司告了所以改名微信小程序。2017年年初，给用户开放了入口。但是只能企业，后面对个人开放了。目前比较火爆的微信小程序，跳一跳之类的。[官网：mp.weixin.qq.com](https://mp.weixin.qq.com/)
<!--more-->
### 录制视频（可全屏观看）
本视频为随堂录制视频，与博客内容一致，若看博客不懂的可以看录制的视频。
<iframe width="696" height="460" src="http://www.iqiyi.com/w_19rz1f5qpp.html"  scrolling="no" frameborder="0" allowfullscreen></iframe>

### 资源下载

PPT下载：<strong>[PPT](http://www.54whg.cn/resource/weChat.pptx)</strong>
源码下载：<strong>[商品收银系统源码下载](http://www.54whg.cn/resource/weChat.zip)</strong>

### 开发准备工作

注册小程序账号，利用微信号注册即可，注册地址为：[戳这儿](https://mp.weixin.qq.com/)

小程序开发者工具下载，下载地址为：[戳这儿](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 开发工具介绍

![weChat](/images/weChat.png)

开发者工具分为四个部分：模拟器，编辑器，调试器，工具栏

- 模拟器：当我们保存了编辑的代码，就可以直接在模拟器中看到效果

- 编辑器：小程序所有的开发代码都可以在这里修改。

- 调试器：继承了许多调试小程序需要的功能

- 工具栏：用于编译，预览小程序的源代码

### 项目搭建

- 1、选择在本地创建的项目目录
- 2、填写AppID
    - 查找AppID，登录小程序官网[官网：mp.weixin.qq.com](https://mp.weixin.qq.com/)->设置->开发设置->AppID

### 项目目录介绍

 |--pages

    |--每个页面(index)    //在pages文件夹中，每一个页面都是有个文件夹

        index.js

        index.wxml

        index.wxss    

        index.json   

    |--utils

    app.js

    app.json

    app.wxss

    project.config.json   //工程配置文件 描述整个项目的参数

- 1、pages:放所有页面的文件夹，此目录下的每一个文件夹代表一个页面，那咱们的项目两个页面就两个文件夹


- 2、每个页面包含四个文件
         .wxml文件是界面文件，  ---->html
         .js是事件交互文件，用于处理界面的点击事件等功能；  --->js
         .wxss为界面美化文件，让界面显示的更加美观；  --->css
         .json为配置文件，用于修改导航栏显示样式等，小程序每个页面必须有.wxml和.js文件，
         其他两种类型的文件可以不需要。

- 3、util：该文件件主要用于存放全局的一些.js文件，公共用到的一些事件处理代码文件可以放到该文件夹下，
         用于全局调用。
- 4、app.js : 系统的方法处理文件，主要处理程序的声明周期的一些方法；例如：程序刚开始运行时事件处理等

- 5、app.json : 系统全局配置文件，设置导航头的颜色，字体大小，下面有没有tabbar等功能，具体页面的配置在页面的json文件中单独修改；

- 6、app.wxss : 全局的界面美化代码

- 7、project.config.json 通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当你换了另外一台电脑重新安装工具的时候，你还要重新配置.考虑到这点，小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，

### app.js

App() 注册一个小程序，整个的app在整个小程序里面只会调用一次，整体是一个app，app下面有很多page，在这个app里面配置的东西，在每个页面都可以使用

onLaunch 函数类型 声明周期函数-监听小程序初始化，全局只会触发一次

globalData：全局的数据

### app.json

pages 接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的[路径+文件名]
信息，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。

注：文件名不需要写文件后缀，因为框架会自动去寻找路径下 .json, .js, .wxml, .wxss四个文件进行整合。 如果添加后缀报错。

windows 小程序所有页面的顶部背景颜色，文字颜色定义在这里的

"backgroundTextStyle":"light", //下拉 loading 的样式，仅支持 dark/light

"navigationBarBackgroundColor": "#fff", //导航栏背景颜色，如"#000000"  颜色值最好不要写单词，十六进制也不要简写

"navigationBarTitleText": "WeChat", //导航栏标题文字内容

"navigationBarTextStyle":"black" //导航栏标题颜色，仅支持 black/white


### Page配置
 "pages":[
    "pages/index/index",
    "pages/center/center"
  ],
    在tabBar里面进行设置的路由，将会固定在页面的底部。

### 头部配置

  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }

### 路由配置

"tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath":"img/index.png",  //默认的图标
        "selectedIconPath":"img/linghtZB.png" //选中后的图标
      },
      {
        "pagePath": "pages/center/center",
        "text": "个人中心",
        "iconPath": "img/center.png",
        "selectedIconPath": "img/center.png"
      }
    ]
  }

### 结束
微信小程序的介绍以及小程序开发工具以及具体的配置信息都已经分享完了，了解了这些就可以开始小程序的开发啦。常用的标签及语法见下一期博客啦^_^

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
