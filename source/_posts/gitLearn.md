---
title: Git 常用的基本命令
author: 王华港
date: 2018-03-17 13:17:50
tags: [git学习]
categories: 编程
comments: true
keywords: 前端博客,JavaScript,html5,css3,hexo，github
---

## 配置   
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
***

## 本地仓库—>远程仓库的基本步骤

git init 新建一个仓库
git status 查看仓库当前的状态
git add <file> 可反复多次使用，添加多个文件；
git add ./--all  添加当前文件夹的所有文件
git commit -m "修改内容" 提交到本地仓库
git remote 查看当前配置有哪些远程仓库
git remote add origin https://github.com/WangHuagang/git-demo.git 将文件添加到指定的GitHub上的仓库
git push -u origin master(分支) 将文件推送到远程仓库上
git pull origin master(将远程仓库的东西“拉”回来)
***

## 其余常用的命令

git status -s  查看变更日志
git log   可以查看提交日志
git reset --hard (6位版本号) 回归到指定版本
git diff  可以用于对比当前状态和版本库中状态的变化
git branch   查看分支
git branch （分支名）   创建一个新的分支
git checkout （分支名）  切换分支 
git clone https://github.com/WangHuagang/git-demo.git .(.表示当前目录) 将远程仓库整个项目克隆到当前目录
git merge <name>  合并某分支到当前分支
git branch -d <name>  删除分支
***
## 将本地文件放在github上显示
1.创建gh-pages分支，利用gh-pages分支上传到远程仓库
2.配置文件CNAME：绑定域名
***
## git搭建自己的博客
1.npm install hexo-cli -g   安装hexo
2.hexo init blog   新建一个博客仓库  
3.cd blog   到博客文件夹下
4.npm install   安装需要的包
5.hexo serve  开启博客

***hexo搭建博客更多的配置将会在后面继续更新***

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