import React from 'react';

import {typeComponent} from './common';

/**
 * 表单items
 * @param {Array} itemsMap 表单列表 详见reame
 * @param {object} getFieldDecorator 父类的包装控件的getFieldDecorator
 * @param {number} width 每个item的长度
 * @param {number} gap item之间的间隙
 */
function TmsFormItems({itemsMap, getFieldDecorator, width = 200, gap = 20}) {
    return (
        <React.Fragment>
            {Object.entries(itemsMap).map(([key, obj]) => (
                <div key={key} style={{marginRight: gap}}>
                    {typeComponent(obj.type, key, obj, getFieldDecorator, width)}
                </div>
            ))}
        </React.Fragment>
    );
}

export default TmsFormItems;