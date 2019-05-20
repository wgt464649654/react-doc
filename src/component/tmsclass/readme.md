# tms 继承组件-公共组件 😺

# 业务场景

该组件实现了一些类方法 封装了 antd 的组件配置 一定程度上加快开发效率 👏

# 功能说明

1.  [Tms.Component]为子类定义的 state 的每个 key 生成 set 方法(_用react-hook没必要用这个_)
2.  [Tms.Table]封装 antd table，给定默认 pagination 配置(_不分页没必要用这个组件_)
3.  [Tms.RangePicker]封装 antd RangePicker，给定默认配置
4.  [Tms.AutoComplete]封装 antd AutoComplete，实现功能
    -   既可下拉选择又可手动输入
    -   可按照文本内容搜索
    -   默认打开下拉框
    -   其他 api 参照 https://ant.design/components/auto-complete-cn/

# 用法示例

_1. Tms.Component 用法_

```javascript
import Tms from 'component/tmscomponent';

export default class Demo extends Tms.Component {
    constructor(props) {
        super(props);
        SINGLE = {
            index: 1
        };
        OBJECTS = {
            person: {
                name: 'james',
                age: 20
            }
        };
        state = Object.assign({}, this.SINGLE, this.OBJECTS);
        this.createStateMethod(this.SINGLE, this.OBJECTS); // 必须执行，生成set方法
    }

    // subjectId值不需要写到state里面 也不会生成set方法
    subjectId = sessionStorage.getItem('subjectId');

    // 对于常亮（不会变的）可以定义成static，即类方法
    static companyName = 'tms';

    render() {
        const {index, person} = this.state;
        const newPerson = {
            name: 'kobe',
            age: 21
        };
        return [
            <span key="id">受试者id：{this.subjectId}</span>,
            <span key="name">公司：{Demo.companyName}</span>,
            <button key="1" onClick={() => this.setIndex(index + 1)}>
                index自增
            </button>,
            <button key="2" onClick={() => this.setPerson('age', person.age + 1)}>
                改变年龄
            </button>,
            <button key="3" onClick={() => this.setPerson(newPerson)}>
                支持直接改变整个对象
            </button>
        ];
    }
}
```

_2. Tms.Table 用法_

```javascript
    import Tms from 'component/tmscomponent';

    class demoTable {
        ...
        render() {
            ...
            return (
                <Tms.Table
                    columns={this.columns}
                    dataSource={data}
                    loading={loading}
                    onChange={this.onTableChange}
                    rowSelection={rowSelection}
                    pagination={{
                        ...pagination // 只需要传total, current, pageSize
                    }}
                />
            )
        }
    }
```

_3. Tms.RangePicker 用法_

```javascript
import Tms from 'component/tmscomponent';
    ...
    render() {
        return (
            <Tms.RangePicker
                value={dateRange}
                className="tms-mr"
                onChange={e => {
                    searchBox.beginDate = e[0];
                    searchBox.endDate = e[1];
                    this.changeAndSearch(searchBox);
                }}
            />
        )
    }
    ...
```

_4. Tms.AutoComplete 用法_

```javascript
import Tms from 'component/tmscomponent';
    ...
    render() {
        const data = [{id: 1, name: 'a'}, {id: 2, nam: 'b'}];
        return (
            <Tms.AutoComplete
                placeholder="请输入"
                style={{width: 100}}
                value={value}
                dataSource={data}
                onChange={(value) => onChange(record, value)}
            />
        )
    }
    ...
```
