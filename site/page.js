import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ScrollToTop from 'react-scroll-up';

import pages from './pages';
import locales from './locales';
import { message, Icon } from 'antd';

const nav = [
    {
        name: '组件',
        id: 'component'
    },
    {
        name: 'functions',
        id: 'functions'
    }
]
export default function Page() {
    const [curPage, setCurPage] = useState('title');
    const [curApi, setCurApi] = useState('component');

    const RenderComponent = useMemo(() => {
        return React.createElement(pages.components.Basic[curPage].default);
    }, [curPage]);

    useEffect(() => {
        // 初始化
        const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);
        if (routes) {
            setCurPage(routes[2]);
        }
    }, []);

    useEffect(() => {
        window.location.hash = `/${curApi}/${curPage}`;
    }, [curPage, curApi]);

    const switchApi = (item) => {
        if (item.id !== 'component') {
            message.info('暂无开放');
            return;
        }
        setCurApi(item.id);
    }
    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    <h1>
                        etrial
                    </h1>
                </div>
                <ul className="nav">
                    {nav.map(item => (
                       <li
                           key={item.id}
                           className={`nav-item ${curApi === item.id ? 'active' : ''}`}
                           onClick={() => switchApi(item)}
                        >{item.name}</li> 
                    ))}
                </ul>
            </header>
            <div className="main container">
                <nav className="side-nav">
                    <ul>
                        <li className="nav-item">
                            {Object.keys(pages.components).map(group => {
                                return (
                                <div className="nav-group" key={group}>
                                    <div className="nav-group__title">{locales[group]}</div>
                                    <ul className="pure-menu-list">
                                        {Object.keys(pages.components[group]).map(page => {
                                            return (
                                                <li key={page} className="nav-item" onClick={() => setCurPage(page)}>
                                                    <a href="javascript:void(0);" className={curPage === page ? 'active' : ''}>{locales.page[page]}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                )
                            })}
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    {RenderComponent}
                    <ScrollToTop showUnder={210}>
                    <div className="page-component-up">
                        <Icon type="caret-up" />
                    </div>
                    </ScrollToTop>
                </div>
            </div>
        </div>
    );
}