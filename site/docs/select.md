## SearchSelect 带搜索下拉框

### 一般用法
:::demo

```js
constructor(props) {
    super(props);
    this.state = {
        field: undefined
    }
    this.getDataList = this.getDataList.bind(this);
    this.onChange = this.onChange.bind(this);
}

render() {
    const { field } = this.state;
    const fieldList = [
        {
            label: '西瓜',
            key: '1'
        },
        {
            label: '香蕉',
            key: '2'
        }
    ];
    return (
        <div>
            <SearchSelect
                placeholder="请选择水果"
                labelInValue
                items={fieldList}
                value={field}
                onChange={this.onChange}
                search={this.getDataList}
            />
        </div>
  )
}

getDataList() {
    message.info('请求接口');
}

onChange(field) {
    this.setState({ field });
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| items     | 列表   | list  |            |    —     |
| className     | 样式   | string  |            |    —     |
| search     | 搜索事件   | func  |            |    —     |
| value     | 当前值   | object  |            |    undefined |
| onChange     | 触发事件   | func  |            |    —     |