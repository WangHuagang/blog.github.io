---
title: What is closure？怎样理解闭包
author: 王华港
date: 2018-03-19 10:37:44
tags: [Javascript]
categories: Javascript
comments: true
top: 21
keywords: js, javascript, 插件, 闭包, Closures, js插件写法, 理解闭包, js闭包
---


## 1.前言

闭包这个东西在JavaScript中是一个很强大的东西，但是在初学的阶段总是被其概念绕晕，搞不清楚到底什么是闭包，感觉很高深。作者在刚学的时候也有一点懵圈，多看几次就会有自己的理解。任何东西都没有唯一的标准，只要适合自己，自己能够理解的就是正确的。由于作者水平有限，将自己的一些见解拿出来，希望大家能够提出宝贵的意见。


## 2.作用域

在正式讲闭包之前，我们来简单的说一说作用域这个东西。这个很有助于大家理解后面的闭包。
什么是域？简单的说就是一个被圈起来的地方，也就是变量能够访问的一个范围。
众所周知，变量的作用域分为全局变量和局部变量。定义在函数外部的称为全局变量，在函数内部的称为局部变量。这里顺带提一下，变量提升这个玩意儿，也就是和“先声明后使用差不多的道理”，后面我将会举一个例子来说明。
举个例子，全局变量和局部变量:
```
var a='wang';
function fun(){
    var b='huagang';
    console.log('这是在函数内部的输出');
    console.log(a);
    console.log(b);
}
fun();//调用函数

console.log("这是在函数外部的输出");
console.log(a);
console.log(b);
```
运行结果:
![运行结果](/images/closure/clo1.png)
最后一个输出b的时候抛出了一个未定义异常，由此可见，全局变量（a）在函数内部和外部都是能访问的，但是局部变量不是这样的，在函数作用域外是不能访问到函数内部的变量（b）的。这里顺带讲一下【变量提升】吧，简单的举一个例子。
```
var a;
console.log(a);
a='wang';
console.log(a)

```
![运行结果](/images/closure/clo2.png)
根据输出情况可以看出，第一次输出a并没有报异常，而是undefined。第二次便能输出a的值。这就是变量提升的特点，在变量还没赋值前就拿来使用了。

## 3.嵌套函数的作用域
嵌套函数，顾名思义就是在函数的内部再写一个或多个函数。下面举一个例子来讲解一下嵌套函数的作用域。
```
function funA(c){
    var a='wang';
    function funB(){
        var b='gang';
        console.log("在函数B中的输出：")
        console.log(a);
        console.log(c);
        console.log(b);
    }
    funB();
    console.log("在函数A中的输出：")
    console.log(a);
    console.log(c);
    console.log(b);
}
funA('hua');//调用函数A并传参
```
![运行结果](/images/closure/clo3.png)
函数B就是嵌套在函数A中的嵌套函数，它可以继承函数A的变量和参数，但是B中的变量A是不能访问的，就好像B给自己的门上了锁，“只进不出”，我可以拿你的东西，但是你不可以拿我的东西。B这样就形成了一个自己独有的封闭空间，这就是一个闭包。
从不同的角度来看：从语法结构上看，函数A包含函数B；从作用域来看，函数B包含函数A，也就是说B能访问的空间比A大。
因此可以想象得出，假如B函数中还有一个嵌套函数X，那么这个X函数也是一个闭包，作用域包含B和A。这样下去就形成了一个作用域链。

## 4.闭包

相信通过上面的讲解，大家已经懂得了什么是闭包，现在再讲讲一些关于闭包的特点或者特性吧。

#### 保存变量
什么是保存变量？加入B这个闭包需要两个变量才能运行，但是刚开始只传了一个参数进去，所以这时候闭包就会把这个变量的值进行保存，等待第二个变量传入，而不是丢弃这个变量的值。下面举一个例子进行说明吧。
```
function funA(a){
    function funB(b){
        return a + b;
    }
    return funB;//调用函数B的引用
}
var x = funA(2);
var sum = x(3);
console.log(sum);//输出结果 5
```
![运行结果](/images/closure/clo4.png)
当函数A传进参数a=2时，这时闭包B就将a进行保存，等到再传b=3时再进行计算。这就是闭包的保存变量。

## 5.为什么要使用闭包

使用闭包的最大的好处——避免变量的污染。也就是说你在闭包中声明的变量不会影响在其他地方也使用这个变量名称，因为闭包将这个变量锁在自己的门里面保护起来了，外部是无法修改的。
```
function funA(){
    function funB(b){
        var a = 'wang';//内部变量 c
        return a+b ;
    }
    return funB;
}
var a = 'hua';//外部变量x，是不能改变闭包B中的变量a的
var sum = funA()(a);
console.log(a);
console.log(sum);
```
![运行结果](/images/closure/clo5.png)
可以看出，外部变量是不能修改闭包中的变量a的值的，从而保护了a的值，使其不会受到污染。

闭包的分享就讲到这里啦，我相信大家能够对闭包能够有一定的了解。当然，由于作者水平有限，这只是个人的见解，有误的地方还希望多多包涵，或者留言告知我。

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
 