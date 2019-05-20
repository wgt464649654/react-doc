import React from 'react';
import {Form, Input, InputNumber, DatePicker, Select} from 'antd';

/**
 * 每个obj的设置的优先级 > 全局的设置 > 默认的
 * @param {object} obj item对象
 */
const commonProps = (obj = {}, width, placeholder) => ({
    style: {width: (obj.width || width)},
    placeholder: obj.placeholder || placeholder || '请输入'
});
/**
 * 公共容器
 * @param {string} keyVal item的key
 * @param {object} obj item对象
 * @param {object} child 渲染的类型
 * @param {*} getFieldDecorator 
 */
const FormItem = (keyVal, obj, child, getFieldDecorator) => {
    return (
        <Form.Item label={obj.label}>
            {getFieldDecorator(keyVal, {
                rules: obj.rules,
                initialValue: obj.initialValue,
            })(child)}
        </Form.Item>
    );
};

/**
 * 渲染组件
 * @param {string} type 要渲染的类型
 * @param {string} key 渲染的key，对应后台的key
 * @param {object} obj item对象
 * @param {*} getFieldDecorator
 * @param {number} width 每个item的长度
 */
export const typeComponent = (type, key, obj, getFieldDecorator, width) => {
    const typeMap = {
        'input': () => {
            const comp = <Input {...commonProps(obj, width)}/>;
            return FormItem(key, obj, comp, getFieldDecorator);
        },
        'inputNumber': () => {
            const comp = (
                <InputNumber
                    {...commonProps(obj, width)}
                    precision={0}
                />
            );
            return FormItem(key, obj, comp, getFieldDecorator);
        },
        'date': () => {
            const comp = (
                <DatePicker
                    style={commonProps({}, width).style}
                />
            );
            return FormItem(key, obj, comp, getFieldDecorator);
        },
        'select': () => {
            const comp = (
                <Select
                    {...commonProps(obj, width, '请选择')}
                >
                    {obj.optionList && obj.optionList.map(e => (
                        <Select.Option key={e.id} value={e.id}>{e.name}</Select.Option>
                    ))}
                </Select>
            );
            return FormItem(key, obj, comp, getFieldDecorator);
        }
    };
    return typeMap[type]();
};