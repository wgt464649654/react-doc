import React, { useState, useCallback } from 'react';
import { Router, Route } from 'react-router';
import {createBrowserHistory} from 'history';

import Components from './pages/components';
import Css from './pages/css';
import Functions from './pages/functions';

export const routerHistory = createBrowserHistory({});

const menus = [
  {
    label: '组件',
    key: 'component'
  },
  {
    label: '函数',
    key: 'function'
  },
  {
    label: '样式',
    key: 'css'
  }
]
export default function App() {
  const [active, setActive] = useState('component');
  const switchMenu = useCallback((key) => {
    setActive(key);
    routerHistory.push(key);
  }, []);
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>
            开发文档
          </h1>
          <ul className="nav">
            {menus.map(li => (
              <li
                key={li.key}
                className={`nav-item ${active === li.key ? 'active' : ''}`}
                onClick={() => switchMenu(li.key)}
              >
                {li.label}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="main container">
        <Router history={routerHistory}>
          <Route path="/component" component={Components} />
          <Route path="/function" component={Functions} />
          <Route path="/css" component={Css} />
        </Router>
      </div>
    </div>
  )
}
