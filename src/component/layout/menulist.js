import React from 'react';
import './menulist.less';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
export default class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            etiralMenu: [],
            defaultSelectedKeys: [this.props.history.location.pathname]
        };
    }

    static getDerivedStateFromProps(props, state) {
        let newPathName = props.history.location.pathname;
        if (JSON.stringify(props.etiralMenu) == JSON.stringify(state.etiralMenu) && state.defaultSelectedKeys[0] == newPathName) {
            return null;
        }
        let pathname = newPathName;
        if (pathname == '/') {
            pathname = props.etiralMenu[0].children ? props.etiralMenu[0].children[0].url : props.etiralMenu[0].url;
        }
        props.history.push(pathname);
        return {
            etiralMenu: props.etiralMenu,
            defaultSelectedKeys: [pathname]
        };
    }

    //渲染菜单
    menuReader = items => {
        if (items) {
            return items.map(item => {
                if (item.children) {
                    return (
                        <SubMenu key={item.url} title={<span>{item.name}</span>}>
                            {this.menuReader(item.children)}
                        </SubMenu>
                    );
                } else {
                    return (
                        <Menu.Item key={item.url}>
                            <span>
                                <span>{item.name}</span>
                            </span>
                        </Menu.Item>
                    );
                }
            });
        } else {
            return null;
        }
    };

    //点击跳转页面
    onChangeMeun = item => {
        if (item) {
            this.props.history.push(item.key);
            this.setState({
                defaultSelectedKeys: [item.key]
            });
        }
    };

    render() {
        const {etiralMenu, defaultSelectedKeys} = this.state;
        return (
            <Menu className="tms-menulist" selectedKeys={defaultSelectedKeys} mode="horizontal" onClick={this.onChangeMeun}>
                {this.menuReader(etiralMenu)}
            </Menu>
        );
    }
}
