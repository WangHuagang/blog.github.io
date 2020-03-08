---
title: 9步教你搭建个人博客(Hexo+Github)
author: 王华港
date: 2018-03-17 13:17:50
tags: [git学习]
categories: 编程
comments: true
keywords: 前端博客,JavaScript,html5,css3,hexo，github
---

#### 1.下载并安装node.js和npm（新版本的node已经自带npm，不用单独下载）
![博主安装好的环境](/images/hexo_github/hexo_1.png)
#### 2.安装git的环境，傻瓜式的安装方法，默认安装即可
![安装好后的情况](/images/hexo_github/hexo_2.png)

#### 3.注册github账号，并创建一个新的仓库，仓库的格式一定要按照这种格式来：***name.github.io***，其他的默认就好
![](/images/hexo_github/hexo_3.png)
#### 4.安装hexo，在电脑某个合适的地方新建一个文件夹（eg：blog），然后命令行进入到该文件夹，按照以下步骤进行安装
-安装hexo
`npm install hexo -g`
-检查是否安装成功
`hexo -v`
-初始化该文件夹
`hexo init`
-安装所需要的组件
`hexo install`
-体验一下hexo
`hexo g`
-开启服务器，正式访问网址体验hexo，输入localhost:4000访问
`hexo s`
若出现下图，启动服务器成功
![](/images/hexo_github/4.png)
若不能成功，可能是端口冲突，请输入以下命令进行切换端口
`hexo server -p`
当看见出现以下页面，表示博客基本框架搭建成功
![](/images/hexo_github/5.png)
#### 5.将hexo与GitHub联系起来，配置name和email（ps：如果已经配置过的可以忽略），在blog文件夹中右键打开Git Bash进行配置
`git config --global user.name 'your github name'`
`git config --global user.email 'your github email'`
##### 5.1输入ssh-keygen -t rsa -C “cdu.whg@foxmail.com” ,连续按三个回车键，生成秘钥，得到了两个文件：id_rsa和id_rsa.pub（默认存储路径是：C:\Users\Administrator\.ssh）。
##### 5.2 输入eval "$(ssh-agent -s)"，添加密钥到ssh-agent。
##### 5.3 再输入ssh-add ~/.ssh/id_rsa，添加生成的SSH key到ssh-agent。
##### 5.4 登陆GitHub，点击头像下拉菜单中的setting，添加ssh
![](/images/hexo_github/6.png)
##### 5.5 新建一个new SSH Key ，输入名称和秘钥（id_rsa.pub文件中的秘钥）即可
![](/images/hexo_github/7.png)
#### 6.配置，找到根文件夹下的_config.yml文件，按照下图进行修改配置
![](/images/hexo_github/8.png)
![](/images/hexo_github/9.png)
#### 7.开启写博客之旅，输入一下命令，建立第一篇blog
`hexo new post 'blogName'`
##### 在source/_posts目录下可看见增加了一个hello.md文件，编辑该文件内容，便可发布博客了
![](/images/hexo_github/10.png)
#### 8.在生成以及部署文章之前，需要安装一个扩展：`npm install hexo-deployer-git --save`
#### 9.安装完后便可以部署了，使用`hexo d -g`进行部署
![](/images/hexo_github/11.png)
##### 部署成功后访问你的地址：http://用户名.github.io。那么就能看到生成发布的文章了。
![](/images/hexo_github/12.png)

#### OK，使用hexo+GitHub搭建基本的个人博客就完成了，后续会推出【提升版】，对个人博客进行更精致的设置以及绑定自己的域名。

`console.log("敬请关注!")`

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