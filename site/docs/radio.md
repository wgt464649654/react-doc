## 单选

### ButtonRadio 按钮单选

:::demo

```js
constructor(props) {
    super(props);
    this.state = {
        curSelectKey: null
    }
    this.onClick = this.onClick.bind(this);
}

render() {
    const {curSelectKey} = this.state;
    const groups = [
        {title: '苹果', id: 1},
        {title: '香蕉', id: 2},
        {title: '梨子', id: 3},
        {title: '芒果', id: 4}
    ]
    return (
        <div>
            <ButtonRadio
                groups={groups}
                curSelectKey={curSelectKey}
                onClick={this.onClick}
            />
        </div>
    )
}

onClick(e) {
    this.setState({curSelectKey: e.id});
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| groups     | 展示列表  | <a href="#groups">obj</a>  |            |    —     |
| curSelectKey     | 当前选中的值   | 与groups中的id类型一致  |            |    —     |
| onClick     | 点击事件  | func  |            |    —     |

<div id="groups"></div>

*groups*
```js
[
    {
        title: '香蕉',
        id: 1
    }
]
```



