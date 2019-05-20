import React from 'react';
import './index.less';
import {Layout} from 'antd';
import pageRouter from './pagerouter.js';
import MenuList from './menulist.js';
import SetUp from './setup.js';
const {Content, Header} = Layout;
export default class Layouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etiralMenu: [],
            pathName: ''
        };
    }
    static getDerivedStateFromProps(props, state) {
        let newPathName = props.history.location.pathname;
        if (JSON.stringify(props.etiralMenu) == JSON.stringify(state.menuArray) && state.pathName == newPathName) {
            return null;
        }
        return {
            etiralMenu: props.etiralMenu,
            pathName: newPathName
        };
    }

    render() {
        const {etiralMenu} = this.state;
        return (
            <Layout className="tms-layout">
                <Header>
                    <div className="tms-layout-header-columns">
                        <div className="tms-layout-header-columns-logo">
                            <img className="tms-pageheader-logo" src={require('src/assets/image/direct.png')} />
                            eScreening
                        </div>
                        <div>{etiralMenu.length > 0 && <MenuList menuArray={etiralMenu} {...this.props} />}</div>
                        <div className="tms-layout-header-columns-setting tms-right">
                            <img className="tms-header-img" src={require('src/assets/image/person.jpg')} />

                            <span className="tms-mr tms-oneline">{JSON.parse(sessionStorage.getItem('sso_loginInfo')).userName}</span>

                            <SetUp />
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Content className="tms-layout-content">{pageRouter(etiralMenu)}</Content>
                </Layout>
            </Layout>
        );
    }
}
