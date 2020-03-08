---
title: base64编码的原理及分析
author: 王华港
date: 2018-03-18 13:17:50
tags: [编程]
categories: 编程
comments: true
top: 15
keywords: 前端博客,JavaScript,html5,css3,hexo，github，base64编码
---


## 1.为什么要使用base64编码
因为有些网络传送渠道并不支持所有的字节，例如传统的邮件只支持可见字符的传送，像ASCII码的控制字符就不能通过邮件传送。这样就受到了很大的限制，比如图片二进制流的每个字节不可能全部是可见字符，所以就传送不了。最好的方法就是在不改变传统协议的情况下，开辟一种新的方案来支持二进制文件的传送。把不可见字符用可见字符来表示。而Base64就是一种基于64个可见字符来表示二进制数据的表示方法。


**提示：不可见字符其实并不是不显示，只是这些字符在屏幕上显示不出来，比如：换行符、回车、退格等字符。**

## 2.base64编码的原理

Base64可以将ASCII字符串或者是二进制编码成只包含A—Z，a—z，0—9，+，/ 这64个字符（ 26个大写字母，26个小写字母，10个数字，1个+，一个 / 刚好64个字符）。

Base64的编码规则是将3个8位字节(3×8=24位)编码成4个6位的字节(4×6=24位)，之后在每个6位字节前面，补充两个0，形成4个8位字节的形式，那么取值范围就变成了0~63。又因为2的6次方等于64，所以每6个位组成一个单元。

下图为base64的字符转换表：
![base64转换表](/images/base64.png)

说太多了感觉复杂，直接上例子：
![base64举例](/images/base64_ex.png)
>该图片转载自 https://www.jianshu.com/p/dd8bffc91c3d

**所以，abc的base64的编码为YWJj；ab的base64编码为YWI=；a的base64编码为YQ==。**     

若末尾的为0，则对应的是A，但通常都用=来表示。因为 = 字符并不在Base64编码索引表中，其意义在于结束符号，在Base64解码时遇到 = 时即可知道一个Base64编码字符串结束。
解码是对编码的逆向操作，但注意一点：对于最后的两个 = 字符，转换成两个A 字符，再转成对应的两个6比特二进制0值，接着转成原始字符之前，需要将最后的两个6比特二进制0值丢弃，因为它们实际上不携带有效信息。

在实际开发过程中，base64一般用于字符和图片的编码，最后，推荐一个在线base64的编码与解码网址：[base64编码](http://base64.xpcha.com/)

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
 