import React from 'react';
import {Spin} from 'antd';

const Loading = WrappedComponent => {
    return class Loading extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            };
        }
        changeLoading = bool => {
            this.setState({
                loading: bool
            });
        };
        render() {
            return (
                <Spin spinning={this.state.loading}>
                    <WrappedComponent {...this.props} onload={this.changeLoading} />
                </Spin>
            );
        }
    };
};
export default Loading;
