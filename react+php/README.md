### 项目开发模板  
---
基于FIS3 PHP-Smarty的React+Flux+ES6 开发Demo

-------------------------------

#### 安装node  
[参考链接](http://www.runoob.com/nodejs/nodejs-install-setup.html)  

#### 安装fis3
[参考链接](http://fis.baidu.com/fis3/docs/beginning/install.html)
```
npm install npm3 -g   
npm3 install fis3 -g
```

#### FIS3 插件 
```
npm3 i -g  fis3-parser-babel  【重要】 

npm3 i -g  fis-parser-less-2.x

npm3 i -g  fis3-hook-relative

npm3 i -g  fis3-hook-commonjs

npm3 i -g  fis-optimizer-clean-css 

npm3 i -g  fis-optimizer-uglify-js

npm3 i -g  fis3-postpackager-loader

npm3 i -g  fis3-smarty

npm3 i -g  fis3-server-smarty

```


#### Start

```
fis3 server start --type smarty  //开启smarty服务

fis3 release -cw   // release 
```


#### 查看实例
```
http://127.0.0.1:8080/demo/page/index
```