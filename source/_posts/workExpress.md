---
title: 实习期间作品（部分）
author: 王华港
tags: [作品]
categories: 作品
comments: true
top: 55
copyright: true
keywords: 作品,实习作品
---
实习（实习公司：Testbird）期间的部分作品展示！实习期间<strong>独立负责兼容/场景测试在线报告</strong>从零开始开发到最终上线，目前已经上线运行6+个月！在线演示地址1：<strong>[兼容/场景测试在线报告](https://comptest.testbird.com/scene/#/d4a7c1ec875d4cd390e25f94d0304f76?config=eyJhbW91bnQiOiAwLCAiYnVzaW5lc3MiOiAiZ2FtZSIsICJhY2NlcHRfbGFuZ3VhZ2UiOiAiemgtY24iLCAibG9jYWxlIjogInpoX0NOIiwgInJlZ2lzdGVyX3R5cGUiOiAwLCAib3MiOiAiYW5kcm9pZCIsICJub19jYWNoZSI6IHRydWUsICJyZWdpc3Rlcl90eXBlX25hbWUiOiAiY29tbW9uIiwgInNlcnZlciI6ICJodHRwczovL2NvbXB0ZXN0LnRlc3RiaXJkLmNvbS9zY2VuZS8ifQ%3D%3D)</strong>-----<strong>[手游测试在线报告](https://comptest.testbird.com/frontend_zc/?config=eyJhbW91bnQiOiAwLCAiYnVzaW5lc3MiOiAiZ2FtZSIsICJhY2NlcHRfbGFuZ3VhZ2UiOiAiemgtY24iLCAibG9jYWxlIjogInpoX0NOIiwgInJlZ2lzdGVyX3R5cGUiOiAwLCAib3MiOiAiYW5kcm9pZCIsICJub19jYWNoZSI6IHRydWUsICJyZWdpc3Rlcl90eXBlX25hbWUiOiAiY29tbW9uIiwgInNlcnZlciI6ICJodHRwczovL2NvbXB0ZXN0LnRlc3RiaXJkLmNvbS9mcm9udGVuZF96Yy8ifQ%3D%3D#/report_v2/83d36733cb7f4f699d5b3f076d4ce049)</strong><!--more-->

## 1.兼容/场景测试在线报告
演示地址：<strong>[演示报告](https://comptest.testbird.com/scene/#/d4a7c1ec875d4cd390e25f94d0304f76?config=eyJhbW91bnQiOiAwLCAiYnVzaW5lc3MiOiAiZ2FtZSIsICJhY2NlcHRfbGFuZ3VhZ2UiOiAiemgtY24iLCAibG9jYWxlIjogInpoX0NOIiwgInJlZ2lzdGVyX3R5cGUiOiAwLCAib3MiOiAiYW5kcm9pZCIsICJub19jYWNoZSI6IHRydWUsICJyZWdpc3Rlcl90eXBlX25hbWUiOiAiY29tbW9uIiwgInNlcnZlciI6ICJodHRwczovL2NvbXB0ZXN0LnRlc3RiaXJkLmNvbS9zY2VuZS8ifQ%3D%3D)</strong>

进入公司后直接开始开发的一个新项目，主要是用于展示APP测试的结果，反馈给客户。

#### 技术栈

Vue+Vuex+axios+Echarts，使用vue的全家桶进行开发，webpack进行打包，Jenkins进行项目部署！
#### 项目概述

- 包含总体概况、汇总报告页、问题报告页、终端报告页、性能报告页、机型详细页、测试步骤页等；
- 根据公司自动化测试平台返回的测试结果进行图表化展示测试结果，方便用户能够更加直观的查看测试结果；
- 该项目是直接面向用户的产品，开发周期在两个月，测试一周，经过两个半月成功上线；
- 项目不停迭代，后续添加了历史对比、报表系统等新需求；

#### 部分截图
![](/images/zuopin/1.png)
![](/images/zuopin/2.png)
![](/images/zuopin/3.png)
![](/images/zuopin/4.png)
![](/images/zuopin/5.png)

## 2.手游测试报告

演示地址：<strong>[演示报告](https://comptest.testbird.com/frontend_zc/?config=eyJhbW91bnQiOiAwLCAiYnVzaW5lc3MiOiAiZ2FtZSIsICJhY2NlcHRfbGFuZ3VhZ2UiOiAiemgtY24iLCAibG9jYWxlIjogInpoX0NOIiwgInJlZ2lzdGVyX3R5cGUiOiAwLCAib3MiOiAiYW5kcm9pZCIsICJub19jYWNoZSI6IHRydWUsICJyZWdpc3Rlcl90eXBlX25hbWUiOiAiY29tbW9uIiwgInNlcnZlciI6ICJodHRwczovL2NvbXB0ZXN0LnRlc3RiaXJkLmNvbS9mcm9udGVuZF96Yy8ifQ%3D%3D#/report_v2/83d36733cb7f4f699d5b3f076d4ce049)</strong>

#### 选用vue框架进行重构原有项目，其主要优点在于：

> * 简单易上手，官方文档较为完善，社区讨论可圈可点；

> * 整洁的代码和模块，提高了编程效率；

> * 脱胎于ng，没有过多复杂的逻辑；

> * 可维护性高；

#### 重构效果

> * 优化H5标签，更富语义化；

> * 代码项目结构更加轻便，便于阅读理解；

> * 展示方面，数据通过vuex进行管理；

> * 页面重新设计，更富表现形式；

> * 渲染上比ng更高效；

#### 优化内容报告

> * 首次进入即写入相关信息至本地浏览器，使URL地址更为轻便简洁；

> * 首页四大模块，报告关键数据一目了然，进入即可查看相关详情信息；

> * 图表利用丰富，数据可视化更直观；

> * 渲染更加高效，浏览速度提升明显，有效利用缓存，大幅降低减少请求时间；

> * 结构更加清晰，层次分明，设计自带返回按钮，跳转更加方便；

> * 快速问题定位，设备定位；

> * 错误日志等级筛选正向筛选，单看一级更加方便；

####  部分截图

![](/images/zuopin/7.png)
![](/images/zuopin/8.png)
![](/images/zuopin/9.png)

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>


<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
