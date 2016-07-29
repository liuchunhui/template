<!DOCTYPE html>
{%html framework="do:static/libs/mod.js"%}
    {%head%}
        <meta charset="utf-8"/>
        <meta content="活动监控系统" name="description">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
        <link rel="shortcut icon" type="image/png" href="../static/images/favicon.ico">
        <title>do平台</title>
        {%require name="do:static/libs/bootstrap/css/bootstrap.css"%}
        {%require name="do:static/libs/jquery/jquery.js"%}
        {%require name="do:static/stylesheets/do.less"%}
        {%require name="do:static/libs/bootstrap/js/bootstrap.js"%}
    {%/head%}
    {%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
    {%body%}
        {%block name="content"%}
        {%/block%}
    {%/body%}
{%/html%}
