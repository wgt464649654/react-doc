import React from 'react';
import {Route} from 'react-router-dom';
import {routerComponentMap} from 'src/router/routermap.js';

//数据渲染路由
const routerReader = data => {
    if (data) {
        return data.map(item => {
            if (item.children) {
                return <React.Fragment key={item.url}>{routerReader(item.children)}</React.Fragment>;
            } else {
                return <Route key={item.url} path={item.url} component={routerComponentMap[item.code]} />;
            }
        });
    } else {
        return null;
    }
};

const pageRouter = menuArray => {
    return (
        <React.Fragment>
            {routerReader(menuArray)}
            {/*<Route  component={404}*/}
        </React.Fragment>
    );
};

export default pageRouter;
