# 加载 loading

## 简述

[加载 loading](../../assets/readme/loading.png)

加载 loading 高阶组件

## 引用关联页面(组件)

1.  受试者详细信息 src/businesscomp/selectsubjects
2.  受试者信息列表 src/businesscomp/subjectslist
3.  医嘱管理 src/view/doctorsadvice
4.  主页 src/view/home
5.  受试者管理 src/view/subjectsmanage/subjects
6.  受试者病例表 src/view/subjectsmanage/subjectsinfo

## 组件项目结构

```
|   +-- index.js //组件入口
|   +-- readme.md// 组件描述文档
```

## 实现方式

1.  index.js 主要是入口文件， 高阶组件实现 loading 的操作

## 用法

```javascript
import Loading from 'src/component/loading/index.js';

@Loading
class Home extends React.Component {
    componentDidMount() {
        this.props.loading(true); //默认是true
    }
}
```
