/**
 * tmsComponent
 */
import React from 'react';
import {Table, DatePicker, AutoComplete} from 'antd';
import moment from 'moment';

import {tmsTitleCase} from 'src/assets/js/common';

import './index.less';

const {RangePicker} = DatePicker;
export default class Tms {
    static Component = class extends React.Component {
        setSingle = (key, val) => {
            return new Promise(resolve => {
                this.setState({[key]: val}, () => resolve());
            });
        };
        setObject = (key, childKey, val) => {
            return new Promise(resolve => {
                // 当childKey是对象，说明是直接改变整个对象
                if (typeof childKey === 'object') {
                    this.setState({[key]: childKey}, () => resolve());
                } else {
                    const obj = this.state[key];
                    obj[childKey] = val;
                    this.setState({[key]: obj}, () => resolve());
                }
            });
        };
        createStateMethod = (single, object) => {
            single &&
                Object.keys(single).map(key => {
                    this[`set${tmsTitleCase(key)}`] = val => this.setSingle(key, val);
                });
            object &&
                Object.keys(object).map(key => {
                    this[`set${tmsTitleCase(key)}`] = (childKey, val) => this.setObject(key, childKey, val);
                });
        };
    };

    static Table = ({pagination, ...others}) => {
        const defaultPagination = {
            showTotal: total => `共${total}条`,
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ['20', '40', '60', '80'],
            size: 'small'
        };
        // 如果不需要分页 则直接设置成false
        const tmsPagination = pagination === false ? false : Object.assign(defaultPagination, pagination);
        return <Table {...others} pagination={tmsPagination} />;
    };

    static RangePicker = ({value, className, ...others}) => {
        const tmsRangePicker = {
            allowClear: true,
            labelInValue: true,
            className: `tms-rang-picker ${className}`,
            size: 'default',
            value: value,
            ranges: {今天: [moment(), moment()]},
            suffixIcon: <i className="iconfont icon-rili tms-rili-icon" />
        };
        return <RangePicker {...Object.assign(tmsRangePicker, others)} />;
    };

    // 手动输入&下拉选择组件
    static AutoComplete = ({dataSource, ...props}) => {
        return (
            <AutoComplete
                autoFocus
                defaultOpen
                size="small"
                labelInValue
                defaultActiveFirstOption={false}
                dropdownMatchSelectWidth={false}
                dataSource={dataSource.map(e => (
                    <AutoComplete.Option key={e.id} value={e.id}>
                        {e.name}
                    </AutoComplete.Option>
                ))}
                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                {...props}
            />
        );
    };
}
