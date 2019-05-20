import React from 'react';
import QueueAnim from 'rc-queue-anim';

import './index.less';

// 外部容器
const Title = ({children}) => <div>{children}</div>;

export const LineTitle = ({text, className}) => (
    <QueueAnim
        type={['right', 'left']}
        duration={500}
        ease={['easeOutQuad']}
        leaveReverse
    >
        <Title key="1">
            <div className={`line-title ${className}`}>{text}</div>
        </Title>
    </QueueAnim>
);
