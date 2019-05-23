import React from 'react';

import './index.less';

export function ButtonRadio({groups, onClick, curSelectKey = '1'}) {
    return (
        <div className="wrapper">
            {groups.map(e => {
                return (
                    <div
                        key={e.id}
                        className={`${curSelectKey === e.id ? 'active' : ''}`}
                        onClick={() => onClick(e)}
                    >{e.title}
                    </div>
                );
            })}
        </div>
    );
}