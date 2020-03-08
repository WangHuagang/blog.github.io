---
title: js如何实现倒计时的原理分析及实现
date: 2018-03-18 15:09:48
tags: [JavaScript]
categories: 编程
comments: true
top: 10
keywords: 前端博客,JavaScript,js倒计时，计时器
---
### js倒计时原理
倒计时=预计时间点-当前时间点
最后将倒计时转换成我们所需要的格式即可（eg：*时*分*秒）
再使用setInterval(function, 1000);每一秒执行一次，动态刷新一次就好。

### js代码实现
```var timer = null;
countDown();
timer = setInterval(countDown, 1000);

// 倒计时计算函数
function countDown(){
    var nowTime = new Date();     // 获取当前日期
    var endTime = new Date(2018,4,20,20,35,0);   //预计时间，注意month需要减1  
    var t = Math.floor((endTime - nowTime)/1000);     // 计算差值（单位：秒）
    var Day = Math.floor(Math.floor(t/86400));     // 天（86400 = 24*3600）
    var Hour = Math.floor(t%86400/3600);   // 时
    var Min = Math.floor((t%3600)/60);    // 分
    var Sec = t%60;     // 秒
    if ( t==0 ){
        clearInterval(timer);
        document.getElementById("showDiv").innerHTML = "倒计时结束！";
    } else {
        document.getElementById("showDiv") = "倒计时还有：" + add(Day) + "天" + add(Hour) + ":" + add(Min) + ":" + add(Sec);
          }
}

function add(iNum){
    return iNum<10 ? "0"+iNum : iNum; //若时间是个位数，则添加一个0在前面
}```


>转载文章时请注明本文的出处 || [咕噜先森的博客](http://www.blog.54whg.cn) 作者->@王华港




<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
