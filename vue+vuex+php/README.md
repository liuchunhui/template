demo
===========================
基于FIS3-Smarty的Vue + VueX + es6 + less + bootstrap

本地服务器start
--------------------------
fis3 server start --type smarty  //开启smarty服务
fis3 release -cw   // release

远程测试机发布
--------------------------
fis3 release XXX -cwL    //XXX代表远程机器名称

本项目结构中各目录的含义
==============================
components
----------------------------
项目中的公共组件【比如：表格组件，多选框组件等等】

fis-conf
----------------------------
配置测试机的地址以及项目打包的配置

page
---------
项目的页面模板文件tpl

static
--------
项目的静态文件。
比如：image图片，libs库文件（jquery，vue，mod等），css样式以及所用的函数库文件

widget
-------
项目中的业务组件【针对特定项目的业务功能的组件】

build.sh
--------
上线到机器上之后运行的脚本文件

fis-conf.js
-----------
基于fis3构建工具的项目的配置文件，fis工具编译发布时的配置规则

plugin

- fis3-smarty
- fis3-hook-module
- fis3-parser-babel







