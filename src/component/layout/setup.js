import React from 'react';
import {Dropdown, Menu} from 'antd';
import {ApiDoLogout} from './action.js';
import './setup.less';
export default class SetUp extends React.Component {
    constructor(props) {
        super(props);
    }

    //内容渲染
    setUpRender = () => {
        return (
            <Menu className="tms-config-group">
                <Menu.Item onClick={this.doLogout}>退出</Menu.Item>
                <Menu.Item onClick={this.goToSelect}>返回TrialOS</Menu.Item>
            </Menu>
        );
    };

    //退出登录
    doLogout = async () => {
        let result = await ApiDoLogout();
        if (result) {
            location.href = '/login';
        }
    };

    //返回TrialOS
    goToSelect = () => {
        location.href = '/select';
    };

    render() {
        return (
            <Dropdown overlay={this.setUpRender()}>
                <i className="iconfont iconhuaban tms-middle-mr" />
            </Dropdown>
        );
    }
}
