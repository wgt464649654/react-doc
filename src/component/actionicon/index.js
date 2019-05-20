import React from 'react';
import {Popconfirm} from 'antd';

import './index.less';

const Icons = {
    save: {
        text: '保存',
        icon: 'iconbaocun'
    },
    edit: {
        text: '编辑',
        icon: 'iconbianji'
    },
    cancel: {
        text: '取消',
        icon: 'iconquxiao'
    },
    pre: {
        text: '上一位',
        icon: 'iconshangyiwei'
    },
    next: {
        text: '下一位',
        icon: 'iconxiayiwei'
    },
    back: {
        text: '返回',
        icon: 'iconfanhui'
    },
    add: {
        text: '新增',
        icon: 'iconxinzeng'
    },
    delete: {
        text: '删除',
        icon: 'iconshanchu'
    }
};

/**
 * 图标
 */
function Icon({icon, className, onClick = () => {}}) {
    return (
        <i
            onClick={onClick}
            className={`iconfont ${icon} tms-mr-6 ${className}`}
        />
    );
}

/**
 * 操作按钮（有icon）
 * @param {string} type 类型
 * @param {function} onClick 点击方法
 * @param {object} info 其他信息 详见readme
 */
export default function actionIcon(type, onClick, info = {}) {
    const {icon, text} = Icons[type] || {};
    const trueClick = info.disabled ? () => {} : onClick;

    // 只有icon
    if (info.onlyIcon) {
        return <Icon onClick={trueClick} icon={icon} />;
    }

    // 带确认框
    if (info.popconfirm) {
        if (info.disabled) {
            return <Icon className="disabled" icon={icon} />;
        }
        return (
            <Popconfirm
                className="tms-popconfirm"
                title={info.popconfirm.title}
                placement="topRight"
                onConfirm={onClick}
                okText={info.popconfirm.okText || '确定'}
                cancelText={info.popconfirm.cancelText || '取消'}
            >
                <Icon icon={icon} />
            </Popconfirm>
        );
    }

    // 带文字
    return (
        <div 
            className={`tms-flex-c action tms-mr-12
                        ${info.hide ? 'tms-hide' : ''} 
                        ${info.disabled ? 'disabled' : ''} `}
            onClick={trueClick}
            title={info.title}
        >
            <Icon icon={icon} />
            {info.noText ? '' : text}
        </div>
    );
}