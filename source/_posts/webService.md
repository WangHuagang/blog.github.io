---
title: 【零开始】怎样购买、配置服务器及发布网站（页）？
author: 王华港
date: 2018-05-15 19:02:59
tags: [服务器]
categories: 服务器
comments: true
top: 200
copyright: true
keywords: 服务器配置,腾讯云，腾讯云服务器配置,怎么购买服务器，腾讯云学生套餐,发布网页。发布网站到服务器
---
![](/images/tencentService/Serverlogo.png)
本文主要讲解从<strong>零开始</strong>搭建属于自己的服务器，<strong>购买==>配置==>发布</strong>，这么一系列详细流程，让自己做的网页能够发布到网络上，一起来开启服务器之旅！<!--more-->本文主要以腾讯云学生套餐进行讲解，其他的云服务器操作类似。若对你有帮助的话，希望能够坚持做下去。

本文原创首发：[咕噜先森的博客](http://blog.54whg.cn/)
#### 购买服务器
服务器目前使用得最多的是阿里云和腾讯云，用起比较稳定。这里讲解的是腾讯云，其实很多浏览器的配置和使用都差不多。这里演示的是腾讯云的学生套餐，作为学生狗，在校期间用用免费的就行。
进入[腾讯云云+校园服务计划](https://cloud.tencent.com/act/campus?fromSource=gwzcw.594708.594708.594708)，选择【体验版】(PS:每日零点开始抢，每天100个名额，限额抢购，抢！抢！)套餐，10元/月。
![](/images/tencentService/xs1.png)
#### 选择配置
腾讯云免费学生套餐 【1核2G，1M带宽 50G云硬盘】，这是腾讯云学生套餐默认的配置，不能进行选择。
接下来选择服务器其他的配置选项：
- 地域：即服务器的位置。选择离访问者比较近的服务器的区域就行，越近的话访问的速度相对会快一点。【例如：成都】

- 可用区：根据地域进行选择就行，问题不大。【例如：成都一区】

- 操作系统：有Linux、Windows等系统，Linux又包括不同的版本：CentOS、Debian、Ubuntu等。选择一个自己熟悉的系统就行。【例如：Windows Server】

- 系统版本：根据你选择的操作系统进行选择适合自己的版本。【例如：Windows Server 2012 R2 标准版 64位中文版】

- 购买时长：选择一个月，因为腾讯云的学生套餐的优惠券是每个月进行领取，所以只能一个月一个月进行购买。

- 对象存储：使用默认的50G就好。

- 域名服务：第一年免费使用.cn域名。若自己有域名，可以选择【否】，若没有可以选择【是】，然后输入一个自己想要的域名，但是这个域名必须是全球唯一的，所以可能你想要的域名已经被注册了，那么你就只能注册其他的域名了。
![](/images/tencentService/xs2.png)
![](/images/tencentService/xs3.png)
#### 核对信息
核对信息，查看自己的购买的配置是否是自己需要的配置。支付完订单，那么你的服务器就已经到手了，就可以开始撸自己的服务器了。
![](/images/tencentService/xs4.png)
#### 查看服务器
那么如何查看自己已经买好的服务器呢。登录腾讯云，进入控制台管理，点击导航栏【云产品】==>【云服务器】==>【云主机】，便能查看自己的云主机啦。
![](/images/tencentService/xs5.png)
![](/images/tencentService/xs6.png)
此处可以查看云主机的各种状态以及一些操作，其中可以查看自己的公网IP和内网IP。
#### 服务器备案与域名解析
严格意义上来讲域名备案的目的就是为了防止在网上从事非法的网站经营活动，打击不良互联网信息的传播，如果网站不备案的话，7天后将会关停服务器，导致不能正常使用。目前国内的所有服务器都需要进行备案。
在这里，直接引用腾讯云给出的<strong>[备案官方文档](https://cloud.tencent.com/document/product/243/655)</strong>，很详细，参照着备案就行，从开始备案到完成的时间可能在20天左右。
域名解析即将域名与IP绑定起来，通过DNS解析，便能通过域名访问IP对应的网站。
详细的域名解析见<strong>[这篇博客](https://blog.csdn.net/j_mani/article/details/70257216)</strong>
<strong>PS：《服务器备案与域名解析》这一步可以先跳过，把后面的步骤全部搞通了再来处理这一模块也是可以的。</strong>
#### 登录云主机
登录云主机便可以操作整个云服务，并配置成你想要的样子。
点击【登录】便可查看如何进行登录，根据不同的系统选择不同的登录方式。
<strong>登录步骤（Windows）：</strong>
- 快捷键【win+R】，输入“mstsc”命令，打开远程桌面对话框。

- 输入框输入云主机的公网IP地址，点击连接。

- 输入默认的用户名【Administrator】，同时输入自己购买服务器时设置的密码，点击确定便能连接到远程桌面。

- 注意：连接时记得在网速好的时候，否则可能带不动导致连接不上。
![](/images/tencentService/xs7.png)
![](/images/tencentService/xs8.png)
进入云主机过后，大家会发现和我们平时使用的Windows没什么区别，操作起来就简单多了。
#### 开启服务器
好了，到了这一步离成功已经很近了。怎样才能让我们的服务器跑起来，能够运行我们自己写的网页或者网站。那么你需要准备下面这个软件——PHPStudy，其实开启服务器的很多，比如Tomcat，只是这里是使用PHPStudy进行演示。
<strong>[PHPStudy下载地址](http://www.phpstudy.net/)</strong>，下载后进行傻瓜式的安装即可。
安装好后，正常启动服务器的效果如下图所示(即前面是绿色小圆点而不是红色小圆点)。
![](/images/tencentService/xs21.png)
这里我们只需要管Apache即可，不用管Mysql，当然若你的项目需要数据库，那么肯定是需要进行相关配置的。Apache默认端口为80，若不使用80端口的话，那么在使用ip地址或者域名访问的时候需要在其后添加端口号。MySQL默认端口为3306。
若不能正常启动，说明端口被占用，这是需要终止其他占用该端口的进程即可。
启动过后，需要简单的配置一下端口及目录。
操作步骤：点击【其他选项菜单】==>【打开配置文件】==>【vhosts-conf】
此时打开应该是空的，只需要把下面的配置添加进去即可。
```
<VirtualHost _default_:80>
DocumentRoot "C:\phpstudy\WWW"   
  <Directory "C:\phpstudy\WWW">
    Options +Indexes +FollowSymLinks +ExecCGI
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
  </Directory>
</VirtualHost>
```
![](/images/tencentService/xs25.png)
PS：记得修改自己的根目录的位置。
那么我的网页应该放在哪个文件夹下才能被访问呢？这时需要打开网站的根目录。
打开根目录的步骤:点击【其他选项菜单】==>点击【网站根目录】，如下图所示：
![](/images/tencentService/xs22.png)
打开后的文件夹便是网站的根目录，这时文件夹中有一些文件是PHPAdmin的一些文件，这时在浏览器地址栏中输入localhost或者127.0.0.1便能访问到PHPAdmin的主页，到此说明phpstudy能够正常开启服务了。
![](/images/tencentService/xs23.png)
以后上传的网页就需要上传到这个文件夹下，就能正常访问了。
若在当前目录有index.html，那么直接访问ip地址或者域名，打开的网页便是默认的index.html。如想访问非默认缺省主页，需要在ip或域名后添加该文件的相对路径。

【例如】在WWW下有一个文件夹aaa中有一个文件aaa.html,那么这时候需要在浏览器地址栏中输入ip地址/aaa/aaa.html（119.149.78.109/aaa/aaa.html）
配置好后，你的服务器便跑起来了，你便能访问你配置好的目录下的网页了，同时也可以使用ip地址进行访问。

这里只做了简单的开启服务器的功能，更多详细的关于phpstudy的使用可参考<strong>[官网](http://www.php.cn/phpstudy-377909.html)</strong>给出的一篇文章
#### 如何上传文件到服务器
所有的环境都搭好了，那么应当怎样将我们自己做好的网页放在服务器上呢？这里讲解三种方法供读者参考，读者可选择适合自己的方法。
##### 方法一
想必大家都使用过ftp进行上传文件，对，这里就是需用ftp进行上传文件。那么上传之前你需要做一个准备工作，那就是在云服务器上配置ftp。这里需要在云主机上安装一个软件【FileZilla Server】，[官网下载地址](https://filezilla-project.org/download.php?type=server)。安装方式也是和phpstudy一致，傻瓜式安装即可。
安装好后，打开软件点击【File】启动FileZilla Server。
![](/images/tencentService/xs9.png)
- 设置ftp账号
点击【Edit】==>【Users】
![](/images/tencentService/xs10.png)
点击【Add】按钮进行添加账户，同时填写账户的名称【例如：test】
![](/images/tencentService/xs12.png)
- 设置密码
在【Password】选项前打勾，并输入密码即可。
![](/images/tencentService/xs13.png)
- 选择共享的文件夹
如下图所示，点击【1】==>点击【Add】选择想要共享的文件夹，这里可直接选择phpstudy的根目录，这样上传的文件夹可直接访问。图中第3步便是设置这个添加的账户对当前目录的文件和文件夹的权限，有增、删、改、查，可根据需求进行设置，若是自己使用可全部勾选上。
![](/images/tencentService/xs14.png)
后面两项可以不用设置，直接使用默认的即可。
![](/images/tencentService/xs15.png)

到此为止，云服务器上的ftp已经配置完成，现在可直接在本机电脑上通过ftp软件或者资源管理器使用刚刚设置好的用户和密码进行登录，然后便能上传文件了。
例如使用【资源管理器】进行登录上传。
打开【我的电脑】，在地址栏中输入：【ftp:IP地址】，这时会弹出一个登录框，要求输入账号和密码，输入刚刚添加的账号和密码即可。
![](/images/tencentService/xs16.png)
这时便登录进来了，直接把要上传的文件拖进来或者复制进来就能完成上传了。
例如上传一个hello.html文件到服务器，直接把hello.html拖拽进去或者复制进去就OK了。
下图是为上传hello.html之前的情况：
![](/images/tencentService/xs17.png)
下图是为上传完成hello.html的情况：
![](/images/tencentService/xs18.png)
这时，我们在云服务器上打开对应的那个目录，便能查看到刚刚那个hello.html文件了。
![](/images/tencentService/xs19.png)
这时我们在浏览器地址栏中输入IP地址+hello.html便能访问到hello.html文件中的内容了。
![](/images/tencentService/xs20.png)
这种方法是使用得比较多的，当然使用ftp软件是一样的，只要配置好后使用起来还是很简单的。
##### 方法二
登录进入云服务器过后，直接通过复制粘贴进行上传文件。但是有一个弊端是，若文件过大很容易造成上传失败。
##### 方法三
在云服务器中直接绑定本机电脑上的某一个磁盘，这样就可以将本机的文件绑定在云服务器上，再通过复制粘贴便能轻松完成文件的上传。
#### 结语
通过这些详细的步骤，我相信你已经从零搭建起自己的服务器了，享受了这么一个过程。过程很重要，当然结果做出来了还是很有成就感的。
当然，由于作者一个人经历、水平也有限，本文中肯定有一些错误，很希望大家提出意见与建议，可以在文末进行留言，作者将会进一步进行改进。
码字也不容易啦，如果你觉得本文对自己有帮助，可以在博客文章下面<strong>打赏</strong>一点棒棒糖零花钱，多少随意啦^_*_^



<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>