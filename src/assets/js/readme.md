# 公共方法

主要定义一些全局的方法，简化开发代码，提高开发效率，方便后期修改，

### 定义规则

**小驼峰命名法**，统一由 `tms` 开头如（tmsClearTrim）

### 主要方法

1.  手机号码校验、字母(不区分大小写)加数字校验、纯数字校验、纯字母 (大小写不区分)校验,去除字符串中的空格(包括中间空格)
2.  回退上一级
3.  设置 cookie、获取 cookie、清除 cookie
4.  新增 localStorage、获取 localStorage、清除 localStorage
5.  新增 sessionStorage、 获取 sessionStorage、 清除 removeSession
6.  前端生成文件并下载
7.  判断数据类型
8.  深拷贝
9.  获取页面高度、获取页面可视宽度、获取页面宽度
10. 数组 通过下标删除数据
11. 时间格式化
12. 获取 url 参数值
13. 替换首字母大写 tmsTitleCase
14. antd 时间选择插件转时间戳 tmsDateConverter
15. imgLoader 图片加载器
