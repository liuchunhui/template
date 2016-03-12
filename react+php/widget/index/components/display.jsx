import React from 'react';

/**
 * 展示输入文本组件
 */
let Display = React.createClass({
    getInitialState () {
        return ({

        })
    },
    getDefaultProps () {
        text: ''
    },
    render () {
        let me = this;
        return (
            <div>{me.props.text}</div>
        );
    }
});

export default Display;
