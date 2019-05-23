## 标题

### LineTitle

:::demo

```js
render() {
  return (
    <div>
      <LineTitle text="标题一" />
    </div>
  )
}
```
:::

### LineTitle 带自定义样式

常用的标题组件。

:::demo `.custom_style {margin: 0;border-color: red;}`

```js
render() {
  return (
    <div>
      <LineTitle className="custom_style" text="标题一" />
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text     | 文字   | string  |            |    —     |
| className     | 样式   | string  |            |    —     |
