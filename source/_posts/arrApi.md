---
title: 数组的常用的API总结，绝对实用，处理数据更加快捷方便
author: 王华港
date: 2018-10-20 12:02:59
tags: [数组]
categories: 数组
comments: true
top: 53
copyright: true
keywords: 数组,arr
---
![](/images/arrAPI.png)

数组相关常用API,熟悉这些常用的API，在实际开发中能够提高很大的开发效率！<!--more-->

### 1.遍历数组
arr.forEach(function (el,index,event) {
             console.log(el)//每一个元素
             console.log(index)//序号
             console.log(event)//数组本身
})

### 2.数组过滤，
.filter(回调函数);返回的是符合条件的筛选后的数据,组成的新数组  3个参数--数组元素、索引、该数组

        var arr=[10,20,30,40,50,60];
        var result=arr.filter(function(el,index,event){
            return x>30;
        });
        console.log(result);//result为返回满足条件的新数组


### 3.遍历数组，每个元素都满足条件，才返回true

  every方法,每个元素都要满足条件才为true
        var arr=[100,200,300,400,500];
        var result=arr.every(function(x,y,z){
          return  x>99;
        });
        console.log(result);

### 4.遍历数组，只要有一个元素满足就返回true

    some方法,只要有一个元素满足条件就是true
        var arr=[10,20,30,40,50];
        var result=arr.some(function(x,y,z){
             return x>40;
        });
        console.log(result);

### 5.map方法,设置数组中的元素都执行一次函数,把新的数组存储在一个新的数组中

        var arr=[10,20,30,40,50];
        var result=arr.map(function(x,y,z){
            return x*2;
        });
        console.log(result);//[20,40,60,80,100]

### 6.数组转字符串
 var arr=["小明","小李","小王","小张"];
 var result=arr.join(",");//可增加连接符
 console.log(result);

### 7.截取字符串  .slice(开始索引,结束索引);截取原数组中的数据,然后组成一个新的数组

       var arr=[1,2,3,4,5,6,7,8,9];
       var result=arr.slice(0,5);   // 0到5之间（不包括5）
       console.log(result);

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
