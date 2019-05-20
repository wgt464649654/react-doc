# assets

这里存放一些静态资源文件,和一些常用的公共样式、js 常用的 公共方法，图片和 readme 文档的图片

##### js

存放一些常用的方法如：

1.  设置 cookie、获取 cookie、清除 cookie
2.  设置 、获取、清除 localStorage 、sessionStorage
3.  回退上一级
4.  数组 通过下标删除数据
5.  时间格式化
6.  获取 url 参数值
7.  前端生成文件并下载
8.  iOS，Safari 移动端浏览器，input 等表单 focus 后 fixed 元素错位问题
9.  判断数据类型
10. 获取页面高度、获取页面可视宽度、获取页面宽度
11. 通过数组下标删除数据
12. 手机号码校验、字母(不区分大小写)加数字校验、纯数字校验、纯字母 (大小写不区分)校验，去除字符串中的空格
13. 数组对象深度拷贝

##### less

> 存放一些常用的公共样式，和全局样式,以及根据项目需要更改的 antd 样式

常用的公共样式如：

```code
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
```

## readme

主要存放一些 readme 说明文档的图片
