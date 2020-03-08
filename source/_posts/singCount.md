---
title: Python实战数据结构——列表/元组
author: 王华港
date: 2018-03-18 13:17:50
tags: [Python]
categories: Python
comments: true
top: 20
keywords: Python实战数据结构——列表/元组，Python列表，Python元组，Python校园歌手大赛
---
### Python实战题目
比赛评分：校园歌手大奖赛中，每个歌手的得分由10名评委和观众决定，最终得分的规则是去掉10名评委所打分数的一个最高分和一个最低分，再加上所有观众评委分数后的平均值。请编写程序输入某个选手的10个评委分数和观众评分，计算其最后得分。

### 实战分析

1.先接受用户输入的所有数据，存在列表中，此时的数据为字符串，应当转换成float，因为求平均分可能会出现小数。

2.利用Python的内置函数sort()进行排序，这里不用管是升序还是降序。

3.利用pop函数去掉第一个和最后一个数，即达到了去掉最高分和最低分的要求。

4.利用for  in  遍历出剩下的所有数，并进行求和sum。

5.将sum与观众的分相加除以总人数便可算出最终得分。

### Python代码
```
sum=0;
inputScore=input("请输入10个分数，以,隔开:");
aScore=input("请输入观众评分：")
splitScore=inputScore.split(',');
intScore = list(map(float, splitScore))# 把字符串转化成float
intScore.sort()
intScore.pop();#去除末尾的数
intScore.pop(0);#去除最开始的数
for x in intScore:
    sum+=x;
avg=(sum+float(aScore))/(len(intScore)+1);
print("该选手最终得分：%.2f"%avg)

```



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
 