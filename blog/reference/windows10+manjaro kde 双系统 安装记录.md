---
slug: /windows10+manjaro kde 
title: windows10+manjaro kde双系统
date: 2021-05-05
authors: littletaoist
tags: [windows, manjaro, 随笔]
keywords: [windows, manjaro,kde]
---

## windows10+manjaro kde 双系统 安装记录

*<u>本文是借鉴了[https://www.cnblogs.com/Jaywhen-xiang/p/11561661.html](https://www.cnblogs.com/Jaywhen-xiang/p/11561661.html)</u>*

### 一、前言

> `Manjaro`是一款基于Arch Linux的、用户友好的发行版，虽然`Manjaro is not Arch`，但它依然能够从`AUR(Arch User Repository)`中提取软件包，且有自己的独立库。
>
> ：照片基本是手机拍的，条件有限。

<!-- truncate -->

### 二、准备工作

> ###### manjaro kde系统镜像文件：官方或者清华镜像开源站下载
>
> 我的是**manjaro-kde-20.2.1-210103-linux59**的镜像
>
> 制作启动盘
>
> ###### 工具选择[rufus](https://rufus.ie/)或者 [ventoy](https://www.ventoy.net/cn/index.html) 都是开源的
>
> 分区方式选择GPT
>
> ![](https://i.loli.net/2021/03/10/elIOtHfSGjbg8hd.png)
>
> 我是用ventoy做的 好处:可以做成多个系统启动盘，只格式化第一次，后面再加镜像就不用格式化了，还可以放其他文件资料，**不要放在U盘的efi分区**
>
> ##### 关闭secure boot 安全启动
>
> 进入Bios界面修改，不同电脑有不同的进入快捷键。
>
> ![IMG_20210310_141118](https://i.loli.net/2021/03/10/qIkl97rZL5dJKEN.jpg)

### 三、开始安装

> 关机开机或重启后 按快捷选择启动项的快捷键 F几
>
> 不同电脑不一样。
>
> ![IMG_20210310_141232](https://i.loli.net/2021/03/10/ulsEThNyV7O8mHa.jpg)
>
> 这是我装好的上面一个 windows 第二个manjaro
>
> 我们要要安装就选择前面带有UEFI标识 的你的U盘，
>
> 回车启动
>
> ![IMG_20210310_141256](https://i.loli.net/2021/03/10/VenSYBJW6ZUfao9.jpg)
>
> ![ocr1615372531850_edit_21223331499364](https://i.loli.net/2021/03/10/a3XZmbi1BxEdtY5.jpg)
>
> 时区 
>
> 键盘 
>
> 语言 
>
> 开源 驱动引导
>
> 闭源专用驱动引导
>
> 这两个选择以开源驱动引导启动
>
> ：我用专用的启动中国源只有上海交大一个源。
>
> 选择回车
>
> ![IMG_20210310_141454](https://i.loli.net/2021/03/11/YRIksDj2ulO1pfv.jpg)
>
> * ###### 选择语言，注意联网
>
> ![IMG_20210310_141525](https://i.loli.net/2021/03/11/SFM6cwl4Lng32NU.jpg)
>
> * ###### 时区选择上海
>
> ![IMG_20210310_141534](https://i.loli.net/2021/03/11/3GeNk2oEnJ4WvUT.jpg)
>
> * ###### 键盘布局默认
>
> 
>
> ######  分区
>
> > 选择手动分区
> >
> > ![IMG_20210310_142008](https://i.loli.net/2021/03/11/36cfELqKkBFO28x.jpg)
> >
> > 分在单独一个硬盘：好处于windows完全不影响
> >
> > 我的划分表(共119G)：
>
> |   大小   | 文件系统  |  挂载点   |   标记   |                        用途                         |
> | :------: | :-------: | :-------: | :------: | :-------------------------------------------------: |
> |    8G    | linuxswap |           |   swap   |               相当用windows的虚拟内存               |
> |    1G    |   fat32   | /boot/efi |   boot   |               存放与Linux启动__引导__               |
> |   60G    |   ext4    |     /     |   root   | 当于win10的C盘,软件一般默认安装在这，尽量给大点空间 |
> | 剩余空间 |   ext4    |   /home   | 无需标记 |                  用户数据资料存储                   |
>
> ![IMG_20210310_142008](https://i.loli.net/2021/03/11/36cfELqKkBFO28x.jpg)
>
> 选择你要安装在的硬盘
>
> ![IMG_20210310_142034](https://i.loli.net/2021/03/11/EUxwc2H6QPsmfSB.jpg)
>
> 选择新建GPT分区
>
> ![IMG_20210310_142116](https://i.loli.net/2021/03/11/VEkbvcpjsg9xACP.jpg)
>
> 创建swap交换分区
>
> ```
> 4G以内的物理内存，SWAP 设置为内存的2倍。
> 
> 4-8G的物理内存，SWAP 等于内存大小。
> 
> 8-64G 的物理内存，SWAP 设置为8G。
> 
> 64-256G物理内存，SWAP 设置为16G。
> ```
>
> ![IMG_20210310_142219](https://i.loli.net/2021/03/11/DM4HOlSTmzhn5jp.jpg)
>
> 新建引导区
>
> ![IMG_20210310_142237](https://i.loli.net/2021/03/11/IKZ2ifTkEVM1Xgr.jpg)
>
> 新建根分区
>
> 剩下的全分给home区
>
> 
>
> **要真正做成双系统要把boot/efi 区放在和windows一起，找到原windows的固态c盘的100M的Fat32格式文件区选择它**

> ![IMG_20210310_142356](https://i.loli.net/2021/03/11/aEAQFxiMz9R1TSc.jpg)
>
> **选择保留  一定要** windows的引导区也在这
>
> 其它分在另一个硬盘。也可以放在C盘，只要你C盘空间大，home区就完全没有必要放在C盘。
>
> 下一步
>
> ![IMG_20210310_142836](https://i.loli.net/2021/03/11/Uxp5Oi6RmYsN1oM.jpg)
>
> 管理密码相同可以勾上
>
> 下一步
>
> ![IMG_20210310_142846](https://i.loli.net/2021/03/11/EtpATGy1zDe4Rnd.jpg)
>
> 选择no office 我觉得wps要好点
>
> 下一步
>
> ![IMG_20210310_142902](https://i.loli.net/2021/03/11/UnReQtAsdq6fxEg.jpg)
>
> 在这可以确认一下有错误不，还可以改
>
> ![IMG_20210310_142910](https://i.loli.net/2021/03/11/cWZJyEsDlo9PVFf.jpg)
>
> 确认
>
> ![IMG_20210310_142918](https://i.loli.net/2021/03/11/SqDyPz7WclBsutZ.jpg)
>
> 等待安装完成
>
> ![IMG_20210310_143259](https://i.loli.net/2021/03/11/52UMtCkylxN4zQ8.jpg)
>
> 重启按快捷键
>
> ![IMG_20210310_141232](https://i.loli.net/2021/03/11/pCs8xidIfPuRMZq.jpg)
>
> 系统选择manjaro
>
> ![IMG_20210310_143418](https://i.loli.net/2021/03/11/sdOKhzqrMQt1jX2.jpg)
>
> 装在单独硬盘里的就选择你装的那个硬盘
>
> 选择启动
>
> ***完成***
>
> 没有开机动画，动画要自己后面自己加

### 四、配置

> sudo pacman-mirrors -c China -m rank # 更改源
>
> ![mmexport1615638513728](https://i.loli.net/2021/03/13/IPszhN8pOQ5jSmZ.jpg)
>
> 我这选择清华源 选择确定
>
> sudo pacman -Syyu #更新软件和系统
>
> sudo pacman -S yay # Arch Linux AUR 包管理工具
>
> 安装后就可以不在root用户下直接用  **yay -S 软件包名**
>
> 命令安装软件

### 五、双系统引导问题

> 要完全完成双系统还进入windows系统里进入双系统引导安装
>
> ***以下方法我本人未曾真正实践过，仅作参考：***
>
> 来源https://www.cnblogs.com/viewts/p/10937060.html
>
> *他这是ubuntu,操作类似的。*
>
> 在windows中安装[EasyBCD](https://neosmart.net/EasyBCD/)引导工具
>
> 先去官网下载个人免费版：
>
> ![img](https://i.loli.net/2021/05/07/CysghqSaipwT1YD.jpg)
>
> 安装好以后添加新项目那添加linux启动选项，选择grub2引导方式，为了方便记忆将名称那改为Manjaro：
>
> ![img](https://i.loli.net/2021/05/07/WlNQJSYgGiTdo4P.png)
>
> 然后重启电脑应该就可以看到开机引导选项了
>
> ：最终效果类似
>
> ![img](https://i.loli.net/2021/05/07/WlNQJSYgGiTdo4P.png)
>
> 选择第二项进入Manjaro系统，双操作系统大功告成。

### 六、结论

```
 最终我放弃了双系统，感觉实用性不是很好，还是用回了虚拟机
```

