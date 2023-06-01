---
id: git-init
slug: git-init
title: git 初操作
date: 2021-08-31
authors: littletaoist
tags: [git, init]
keywords: [git, init]

---

### git 初操作

#### 1、下载安装

步骤：略

添加到环境变量：略

#### 2、配置git 在git bash中输入命令

```shell
git config --global user.name "你的用户名"

git config --global user.email "你的邮箱"
# --global 全局 永久生效
```

#### 3、创建ssh key

 *建立信任关系*

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
#得到key 复制
```

*在github中打开设置*

![1](https://aritus-bed.oss-cn-hangzhou.aliyuncs.com/img/202207161521493.png)

*找到SSH and GPGkey* 

*上面有也一些帮助指南*

*New SSH key*

*将上面复制的ssh key 粘贴到key中* 

![image-20220716152137202](https://aritus-bed.oss-cn-hangzhou.aliyuncs.com/img/202207161521325.png)

*title 随意* 

*确认就创建完成了* 

*检查ssh key* 

*在git bash中输入*

```shell
cd ~/.ssh
# 跳到ssh路径就是成功了
```

#### 4、建立仓库

*在github中 建立一个**空的同名仓库 ***

*与本地仓库同名*

![image-20220716152816138](https://aritus-bed.oss-cn-hangzhou.aliyuncs.com/img/202207161528230.png)

#### 5、上传本地仓库

```shell
# 在你要操作的本地仓库(文件夹)打开git bash

# 把这个文件夹变成Git可管理的仓库
git init
# 把当前文件夹所有文件全部添加到仓库上
git add .
# 用git commit -m "日志" 把项目提交到仓库
git commit -m "第一次提交"
# 转到main分支
git branch -M main
# 添加关联仓库地址
git remote add origin 仓库地址
# 由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后就不用了，会等会时间
git push -u origin main
```

#### 6、删除文件

```bash
# 删除工作区文件
rm 文件名/文件夹名(包括文件类型名)          
# 删除仓库文件
git add 文件名/文件夹名
git commit -m "delete 文件名/文件夹名"
# 更新仓库
git push origin main 
```



#### 7、常用命令

```shell
git remote add origin git@github.com:yeszao/dofiler.git         # 配置远程git版本库

git pull origin master                                          # 下载代码及快速合并 

git push origin master                                          # 上传代码及快速合并

git fetch origin                                                # 从远程库获取代码 

git branch                                                      # 显示所有分支

git checkout master                                             # 切换到master分支

git checkout -b dev                                             # 创建并切换到dev分支

git commit -m "first version"                                   # 提交

git status                                                      # 查看状态

git log                                                         # 查看提交历史

git config --global core.editor vim                             # 设置默认编辑器为vim（git默认用nano）

git config core.ignorecase false                                # 设置大小写敏感

git config --global user.name "YOUR NAME"                       # 设置用户名

git config --global user.email "YOUR EMAIL ADDRESS"             # 设置邮箱

git clone url                                                   # 克隆仓库
```

#### 问题：

##### 解决VSCode报Delete `␍`eslint(prettier/prettier)问题

windows电脑git clone代码的时候，autocrlf选项默认为true，克隆下来的文件每行会被自动转成以CRLF结尾，若对文件不做任何修改，commit执行eslint的时候就会提示你删除CR。

因此最根本的办法就是对git的autocrlf配置属性进行修改。 在命令行中运行以下代码：

> 注意： git全局配置之后，新拉取代码就可以了。

```arduino
git config --global core.autocrlf false
复制代码
```

core.autocrlf是git中负责处理line ending的变量，可以设置3个值：true，false，input。

（1）设置为true【config --global core.autocrlf true】

当设置成true时，这意味着你在任何时候添加(add)文件到git仓库时，git都会视为它是一个文本文件(text file)。它将把crlf变成LF。

（2）设置为false【config --global core.autocrlf false】

当设置成false时，line endings将不做转换操作。文本文件保持原来的样子。

（3）设置为input时，添加文件git仓库时，git把crlf编程lf。当有人Check代码时还是lf方式。因此在window操作系统下，不要使用这个设置。

