*formitems组件*

# 参数说明
###itemsMap
form itms列表，形如
```
    const itemsMap = {
        shortName: {
            label: '姓名缩写',
            type: 'input',
            initialValue: '小王',
            rules: [
                {
                    pattern: /^[A-Z]+$/,
                    message: '须为大写字母'
                }
            ]
        },
        age: {
            label: '年龄',
            type: 'inputNumber',
            rules: [
                {
                    required: true,
                    message: '年龄必填'
                }
            ]
        }
    }
```
目前对象当中支持的字段：
[rules]：同antd
[type]：渲染类型（input，date等）
[label]；显示的标签名称
[*placeholder*]：占位符
[*width*]：长度

注：其中打星号的字段也支持直接在TmsFormItems组件中设置，就会改变所有item的属性
也就是既可以是私有的 也可以是针对全部的