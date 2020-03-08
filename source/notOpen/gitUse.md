---
title: 教学视频 | git的基本命令使用教学视频
date: 2018-04-01 12:02:42
tags: [git]
categories: git
comments: true
top: 30
copyright: true
# password: 123
keywords: git的基本命令使用教学视频,git教学视频
---
### 前言
git是当今非常流行的版本控制管理器，在项目开发中使用得非常多。但是很多人去网上看着文章学习的时候总会出现一些大大小小的错误，导致操作失败。这是一个全程录制的教学视频，每一步都很详细，希望能够帮助到你并能够顺利的使用git。

视频中的git命令清单可以参看我的博客[【Git 常用的基本命令】](http://blog.54whg.cn/2018/03/17/gitLearn/)

### 教学视频（可全屏观看）

<iframe width="735" height="420" src="http://v.youku.com/v_show/id_XMzUwNjM0MTk4MA==.html?spm=a2h3j.8428770.3416059.1"  scrolling="no" frameborder="0" allowfullscreen></iframe>

### git的基本命令
```
配置
git config –global user.name “Your Name”
git config –global user.email “email@example.com“

本地仓库—>远程仓库的基本步骤
git init 新建一个仓库
git status 查看仓库当前的状态
git add 可反复多次使用，添加多个文件；
git add ./–all 添加当前文件夹的所有文件
git commit -m “修改内容” 提交到本地仓库
git remote 查看当前配置有哪些远程仓库
git remote add origin https://github.com/WangHuagang/git-demo.git 将文件添加到指定的GitHub上的仓库
git push -u origin master(分支) 将文件推送到远程仓库上
git pull origin master(将远程仓库的东西“拉”回来)

其余常用的命令
git status -s 查看变更日志
git log 可以查看提交日志
git reset –hard (6位版本号) 回归到指定版本
git diff 可以用于对比当前状态和版本库中状态的变化
git branch 查看分支
git branch （分支名） 创建一个新的分支
git checkout （分支名） 切换分支
git clone https://github.com/WangHuagang/git-demo.git .(.表示当前目录) 将远程仓库整个项目克隆到当前目录
git merge 合并某分支到当前分支
git branch -d 删除分支

将本地文件放在github上显示
1.创建gh-pages分支，利用gh-pages分支上传到远程仓库
2.配置文件CNAME：绑定域名
```


<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
