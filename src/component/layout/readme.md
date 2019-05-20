# 项目布局

## 简述

[项目布局](../../assets/readme/adddoctorsadvice.png)

[项目布局](../../assets/readme/subjectsinfo.png)

app 入口页面的总体布局

## 引用关联页面(组件)

1.  入口 src/view/app.jsx

## 组件项目结构

```
|   +-- action.js // api接口文件
|   +-- index.js //组件入口
|   +-- index.less //样式
|   +-- logininfo.js //个人信息
|   +-- logininfo.less//样式
|   +-- menulist.js //菜单渲染
|   +-- menulist.less//样式
|   +-- pagerouter.js//路由渲染
|   +-- readme.md// 组件描述文档
```

## 实现方式

1.  index.js 入口组件，获取数据渲染子组件
2.  logininfo 左侧用户信息获取渲染，和每日任务展示
3.  menulist 左侧菜单渲染
4.  pagerouter 动态路由，通过接口获取的 code 作为 key 值 去 routermap 获取相应的组件，然后在渲染到组件里

## 用法

```javascript
import Layouts from 'src/component/layout/index.js';

<Layouts history={routerHistory} etiralMenu={etiralMenu} />;
```

## 对外依赖

-   静态资源 src/assets/less
-   路由 src/router/routermap.js
-   权限配置 src/authconfig/index
