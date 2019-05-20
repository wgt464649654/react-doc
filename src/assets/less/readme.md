# 公共样式描述

主要定义全局的样式 间距，颜色的的变量，其他 less 引用,定义一下单个样式类，提高开发效率，重写 antd 样式，方便后期修改，

### 文件说明

[common.less] 定义全局的业务组件样式(旧 将要废除)
[flex.less] 定义 flex 相关样式
[style.less] 定义全局样式
[variables.less] 定义样式变量
[space.less] 定义间距
[rewriteantd.less] antd样式重写

### 主要样式

1.  内外间距 大中小
2.  字体大小
3.  字体颜色
4.  主题颜色
5.  背景色
6.  选中颜色
7.  标题大小

### 定义规则

统一由 `tms` 开头、中划线 、大（large）中（省略）小(small)、中划线 、具体样式， （例如 .tms-large-title）,可以 简写，单字义明确如（.tms-mr{margin-right:12px;}）

### 主要样式类：

```css
/* 标题 */
.tms-title {
    font-size: 16px;
    color: @font-title-color;
    line-height: 16px;
}

.tms-small-title {
    font-size: 14px;
    color: @font-title-color;
    line-height: 14px;
}
.tms-large-title {
    font-size: 18px;
    color: @font-title-color;
    line-height: 18px;
}
.tms-font-size {
    font-size: @font-size;
}
/*字体颜色 禁用*/
.tms-tips-color {
    color: @font-tips-color;
}
/*字体颜色 常规*/
.tms-font-color {
    color: @font-color;
}
.tms-disable-color {
    color: @font-disable-color;
}
.tms-background {
    background: @tms-background;
}

.tms-color,
.tms-theme,
.tms-active {
    color: @tms-theme;
}

.tms-middle-ml {
    margin-left: @tms-middle-spacing;
}
.tms-ml {
    margin-left: @tms-spacing;
}
.tms-large-ml {
    margin-left: @tms-large-spacing;
}
.tms-middle-mr {
    margin-right: @tms-middle-spacing;
}
.tms-mr {
    margin-right: @tms-spacing;
}
.tms-large-mr {
    margin-right: @tms-large-spacing;
}
.tms-middle-mt {
    margin-top: @tms-middle-spacing;
}
.tms-mt {
    margin-top: @tms-spacing;
}
.tms-large-mt {
    margin-top: @tms-large-spacing;
}
.tms-middle-mb {
    margin-bottom: @tms-middle-spacing;
}
.tms-mb {
    margin-bottom: @tms-spacing;
}
.tms-large-mb {
    margin-bottom: @tms-large-spacing;
}
.tms-middle-pl {
    padding-left: @tms-middle-spacing;
}
.tms-pl {
    padding-left: @tms-spacing;
}
.tms-large-pl {
    padding-left: @tms-large-spacing;
}
.tms-middle-pr {
    padding-right: @tms-middle-spacing;
}
.tms-pr {
    padding-right: @tms-spacing;
}
.tms-large-pr {
    padding-right: @tms-large-spacing;
}
.tms-middle-pt {
    padding-top: @tms-middle-spacing;
}
.tms-pt {
    padding-top: @tms-spacing;
}
.tms-large-pt {
    padding-top: @tms-large-spacing;
}

.tms-middle-pb {
    padding-bottom: @tms-middle-spacing;
}
.tms-pb {
    padding-bottom: @tms-spacing;
}
.tms-large-pb {
    padding-bottom: @tms-large-spacing;
}
.tms-right {
    text-align: right;
}
.tms-center {
    text-align: center;
}
.tms-hidden {
    overflow: hidden;
}
.tms-block {
    display: block;
}
.tms-hide {
    display: none;
    opacity: 0;
}
.tms-inline-block {
    display: inline-block;
}
.tms-pointer {
    cursor: pointer;
}
.tms-oneline {
    width: 100%;
    display: inline-block;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
}
```
