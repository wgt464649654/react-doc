import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ScrollToTop from 'react-scroll-up';

import pages from './pages';
import locales from './locales';
import { message, Icon } from 'antd';

const nav = [
    {
        name: '组件',
        id: 'components',
        defaultPage: 'title'
    },
    // {
    //     name: '方法',
    //     id: 'functions',
    //     defaultPage: 'functions'
    // }
]
function getCurUrlRestful(index, defaultVal) {
    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);
    if (routes) {
        return routes[index];
    }
    return defaultVal;
}

export default function Page() {
    const [curPage, setCurPage] = useState(getCurUrlRestful(2, 'title'));
    const [curApi, setCurApi] = useState(getCurUrlRestful(1, 'components'));

    const RenderComponent = useMemo(() => {
        return React.createElement(pages[curApi].Basic[curPage].default);
    }, [curPage]);

    useEffect(() => {
        window.location.hash = `/${curApi}/${curPage}`;
    }, [curPage, curApi]);

    const switchApi = (item) => {
        setCurApi(item.id);
        setCurPage(item.defaultPage);
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
                            {Object.keys(pages[curApi]).map(group => {
                                return (
                                <div className="nav-group" key={group}>
                                    <div className="nav-group__title">{locales[group]}</div>
                                    <ul className="pure-menu-list">
                                        {Object.keys(pages[curApi][group]).map(page => {
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