---
title: 微信小程序入门（二）之常用语法
author: 王华港
date: 2018-10-17 19:02:59
tags: [微信小程序]
categories: 微信小程序
comments: true
top: 53
copyright: true
keywords: 小程序,微信小程序,WeChat
---

![](/images/weChatcover2.png)

微信小程序中常用的组件、技巧、前后端请求数据等，这一章的学习便能开发一个简易的小程序。
<!--more-->
### 常用组件

通过上一篇博客的学习，开发微信小程序的基本结构已经搭建好啦，现在可以开始编写代码，开始开发啦。

<strong>view、text、image、input、radio</strong>

这几个是比较常见的，用得比较多的组件，更多的组件可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/)。

其实这些组件和HTML中的标签差不错，比如view就好比HTML中的div，text就好比span等等。


### 获取js中数据

如何从js中获取数据到页面中渲染，这是在开发中用得很多的。
微信中使用
{% raw %}
<strong>`{{}}`</strong>
{% endraw %}
进行获取js中的数据，例如：
index.js:
```
  data: {
    name:'咕噜先森'
  }
```
index.wxml:
```
  <view>{{name}}</view>
```

### 获取前端页面中的数据

例如获取input中输入的数据，使用bindinput绑定函数，并在函数中使用事件对象<strong>e.detail.value
</strong>进行获取值。例如：
index.wxml:
```
<input type='text' bindinput='getValue'></input>
```
index.js:
```
  getValue: function (e) {
      console.log(e.detail.value)
  },
```
### 设置数据

对从前端页面获取到的值，怎样保存到数据中，供后面的逻辑使用。
<strong>this.setData({})</strong>
index.wxml:
```
<input type='text' bindinput='getValue'></input>
```
index.js:
```
  data: {
    name:''  
  },
  getValue: function (e) {
      this.setData({
        name: e.detail.value
    })
  },
```

### 循环遍历数据

假如js中拿到的数据是一个数组，应该怎样将全部的数据渲染在页面中？
<strong>wx:for</strong>,例如：（其中list为一个数组）

```
<block wx:for="{{list}}" wx:key="{{goodsId}}">
    <view class="tr bg-g" wx:if="{{index % 2 == 0}}">
    <view class="td">{{item.goodsId}}</view>
    <view class="td">{{item.goodsName}}</view>
    <view class="td">{{item.goodsPrice}}</view>
    </view>
</block>

```

### 绑定数据

在前端开发时，绑定是一个事件可以使用onclick等进行绑定，但是小程序不是这样使用的，而是使用<strong>bindtap</strong>

```
<view bindtap=“submit”>提交</view>
```

### 向后台发送请求

前后端的数据交互，是在进行开发时不可缺少的，比如ajax进行请求，微信中使用<strong>wx.request</strong>进行请求。

```
 wx.request({
      url: 'test.php', //接口地址
      data: {       //发送的数据
          name:'咕噜先森'
      },
      header: {
          'content-type': 'application/json'     // 默认值
      },
      method:'GET/POST',//发送的方法
      success: function(res) {//请求成功调用的函数
          console.log(res.data)
      },
      fail: function () {//请求失败调用的函数
          console.log("接口调用失败");
      }

    })

```

### 其他常用结构

- 向数组中追加数据
```
arr.push()
```
- 循环遍历数组
```
for(var i=0;i<arr.length;i++){  

}
```
- 循环对象
```
for(var name in json){  

}
```

### 结束

到目前为止，小程序的基本的入门介绍完啦，后续会继续更出更多的分享或者小程序的实例。


