import React from 'react';
import { Select, Icon } from 'antd';

import './index.less';

export default class SearchInput extends React.Component {
    render() {
        const { items, className, search, value, onChange, ...props } = this.props;
        return (
            <div className="tms-search-select-wrapper">
                <Select
                    showSearch
                    showArrow={false}
                    value={value || undefined}
                    {...props}
                    className={`tms-search-select ${className}`}
                    optionFilterProp="children"
                    onChange={onChange}
                >
                    <Select.Option key="all" value={0}>全部</Select.Option>
                    {items.map(e => <Select.Option key={String(e.key)} value={e.key}>{e.label}</Select.Option>)}
                </Select>
                <Icon
                    className="tms-search-icon"
                    type="search"
                    onClick={search}
                />
            </div>
        );
    }
};