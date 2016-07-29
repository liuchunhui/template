{%extends file="/page/layout.tpl"%}
{%block name="content"%}
    {%* 通过widget插件加载模块化页面片段，name属性对应文件路径,模块名:文件目录路径 *%}
    {%widget name="do:widget/nav/nav.tpl"%}
{%* 通过script插件收集JS片段 *%}
{%script%}
{%/script%}
{%/block%}
